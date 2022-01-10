import React from "react";

const GlobalTabel = ({children}) => {
  return (
    <div className="container">
      Add Item
      {children}
      
      <table className="table table-dark table-striped table-bordered border-primary">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Suppliers</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Apple</td>
            <td>
              <button type="button" class="btn btn-success btn-sm">
                Update
              </button>{" "}
              <button type="button" class="btn btn-danger btn-sm">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default GlobalTabel;
