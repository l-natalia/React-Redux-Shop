import React, { useState } from "react";
import { Button, Input, Alert } from "reactstrap";
import { Redirect } from "react-router-dom";
import { login } from "../../actions/auth";
import { useDispatch, useSelector } from "react-redux";
import "./index.css";

const LogIn = () => {
  const [values, setValues] = useState("");
  const [alert, setAlert] = useState(false);

  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const dispatch = useDispatch();
  const signIn = () => {
    dispatch(login());
  };

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    if (values.name !== "anna" || values.password !== "123") {
      setAlert(true);
    }
    if (values.name === "anna" && values.password === "123") {
      signIn();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validate();
  };

  if (loggedIn === true) return <Redirect to="/" />;

  return (
    <div className="container form_ login">
      <form onSubmit={handleSubmit}>
        <p className="title">Log In</p>
        <Input
          type="text"
          placeholder="name"
          name="name"
          onChange={handleChange}
        />
        <Input
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
        <Button color="info">Log In</Button>
        <Alert color="danger" isOpen={alert}>
          Please use details provided below
        </Alert>
        <p>
          You can log in with <br /> name:<span> anna</span>, password:
          <span> 123</span>
        </p>
      </form>
    </div>
  );
};

export default LogIn;
