import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { addUser } from "../actions/lead_reducer";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const AddUser = () => {
  // component state
  const [state, setState] = useState({
    name: "",
    username: "",
    email: "",
  });
 
  const dispatch = useDispatch();
  const history = useHistory();
  const { name, username, email } = state;
  const [error, setError] = useState("");

  // handelchange
  const handelChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  // handelsubmit
  const handelSubmit = (e) => {
    e.preventDefault();
    // check the value
    if (!name || !username || !email) {
      setError("Please all input fill");
    } else {
      dispatch(addUser(state));
      history.push("/");
      setError("");
    }
  };

  return (
    <div className="container">
      {error && <h3>{error}</h3>}
      <Form onSubmit={handelSubmit}>
        <Form.Group className="mb-3" controlId="formGroupInput">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            onChange={handelChange}
            value={name}
            placeholder="Enter Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupInput">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            onChange={handelChange}
            value={username}
            placeholder="Username"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            onChange={handelChange}
            value={email}
            placeholder="Email address"
          />
        </Form.Group>
        <Button variant="success" type="submit">
          Add
        </Button>
      </Form>
    </div>
  );
};

export default AddUser;
