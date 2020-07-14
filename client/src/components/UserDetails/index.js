import React, { useState } from "react";
import { Input, Button } from "reactstrap";
import "./index.css";

const UserDetails = () => {
  const initState = {
    name: { name: "name", value: "Anna Smith" },
    email: { name: "email", value: "anna@gmail.pl" },
    address: {
      name: "address",
      value: "New York, 47 Williams St. Fall Valley",
    },
    phone: { name: "phone", value: "+44 898415873" },
  };

  const [values, setValues] = useState(initState);

  const [editing, setEditing] = useState(false);
  const toggleEditing = () => {
    setEditing(!editing);
  };

  const cancelEditing = () => {
    setValues(values);
    toggleEditing();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: { name, value },
    });
  };

  return (
    <div className="user-details">
      {editing === false ? (
        <h2>My Details</h2>
      ) : (
        <h2>
          Edit your Details
          <i className="fa fa-pencil" aria-hidden="true" />
        </h2>
      )}
      {Object.keys(values).map((key) => (
        <div>
          <label>{values[key].name}:</label>
          <Input
            name={values[key].name}
            value={values[key].value}
            onChange={handleChange}
            style={{ pointerEvents: editing === false ? "none" : null }}
          />
        </div>
      ))}
      <div className="buttons">
        {editing === false ? (
          <Button onClick={toggleEditing} color="info">
            <>
              Edit your Details
              <i className="fa fa-pencil" aria-hidden="true" />
            </>
          </Button>
        ) : (
          <>
            <Button onClick={toggleEditing} color="info">
              Save Changes
            </Button>
            <Button color="danger" onClick={cancelEditing}>
              Cancel Editing
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default UserDetails;
