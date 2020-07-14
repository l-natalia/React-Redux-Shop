import React, { useState } from "react";
import { Button, Input, FormFeedback, Alert } from "reactstrap";
import Joi from "joi-browser";
import "./index.css";

const Contact = () => {
  const [values, setValues] = useState("");
  const [errors, setErrors] = useState({});

  const schema = {
    name: Joi.string().required().label("Name").min(3),
    email: Joi.string().required().label("e-mail").email(),
    message: Joi.string().required().label("Message").min(10),
  };

  const validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(values, schema, options);
    if (!error) return null;
    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  const validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schemaProperty = { [name]: schema[name] };
    const { error } = Joi.validate(obj, schemaProperty);
    return error ? error.details[0].message : null;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: validateProperty(e.target),
    });
  };

  const [alert, setAlert] = useState(false);
  const showAlert = () => {
    setAlert(true);
    setTimeout(function () {
      setAlert(false);
    }, 5000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    showAlert();
    setValues({ name: "", email: "", message: "" });
  };

  return (
    <>
      <div className="container contact form_">
        <p className="title">Contact Us</p>
        <div className="d-flex justify-content-around flex-wrap">
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              placeholder="name"
              name="name"
              value={values.name}
              onChange={handleChange}
              invalid={errors.name ? true : false}
            />
            <FormFeedback>{errors.name}</FormFeedback>
            <Input
              type="text"
              placeholder="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              invalid={errors.email ? true : false}
            />
            <FormFeedback>{errors.email}</FormFeedback>
            <Input
              type="textarea"
              placeholder="your message"
              rows="5"
              name="message"
              value={values.message}
              onChange={handleChange}
              invalid={errors.message ? true : false}
            />
            <FormFeedback>{errors.message}</FormFeedback>
            <Button color="info" disabled={validate() === null ? false : true}>
              Send
            </Button>
            <Alert color="info" isOpen={alert} toggle={showAlert}>
              Your Message was Successfully Sent!
            </Alert>
          </form>
          <div className="contact-details">
            <p>
              <span>Address: </span>New York
            </p>
            <p>2447 Roberts St. Spring Valley, NY 10977</p>
            <p>
              <span>Phone: </span>+44 39845873
            </p>
            <p>
              <span> E-mail: </span>contact@buyabear.com
            </p>
            <i className="fa fa-facebook-official" aria-hidden="true"></i>
            <i className="fa fa-pinterest-p" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
