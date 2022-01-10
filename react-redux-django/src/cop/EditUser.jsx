import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { getsingleUser, getupdateUser } from "../actions/lead_reducer";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

const EditUser = () => {
  const [state, setState] = useState({
    name: "",
    username: "",
    email: "",
  });

  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const { user } = useSelector((state) => state.users_data);
  const { name, username, email } = state;
  const [error, setError] = useState("");

  // fetch single data
  useEffect(() => {
    dispatch(getsingleUser(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (user) {
      setState({ ...user });
    }
  }, [user]);

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
      dispatch(getupdateUser(state, id));
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
            value={name || ""}
            placeholder="Enter Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupInput">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            onChange={handelChange}
            value={username || ""}
            placeholder="Username"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            onChange={handelChange}
            value={email || ""}
            placeholder="Email address"
          />
        </Form.Group>
        <Button variant="success" type="submit">
          Update
        </Button>
      </Form>
    </div>
  );
};

export default EditUser;
