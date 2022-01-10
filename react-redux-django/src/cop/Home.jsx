import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUsers, deleteUser } from "../actions/lead_reducer";
import { useHistory } from "react-router-dom";
import { Table, Button } from "react-bootstrap";
const Home = () => {
  let dispatch = useDispatch();
  const { users } = useSelector((state) => state.users_data);
  const history = useHistory();
  
  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);

  const handelDelete = (id) => {
    if (window.confirm("Are you sure wanted to delete user ?")) {
      dispatch(deleteUser(id));
    }
  };

  return (
    <div className="container">
      {" "}
      <br />
      <Button variant="success" onClick={() => history.push("/add-user")}>
        Add User
      </Button>{" "}
      {/* <Button variant="success"><Link to="/add-user">Add</Link></Button>{' '} */}
      <br />
      <br />
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => handelDelete(item.id)}
                    >
                      Delete
                    </Button>{" "}
                    <Button
                      variant="success"
                      onClick={() => history.push(`/edit/${item.id}`)}
                    >
                      Edit
                    </Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
};

export default Home;
