import React from "react";
import { Link, useHistory } from "react-router-dom";
// import Home from "../components/Home";

const HeaderNavbar = () => {
    const history = useHistory()
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            MyHo
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/suppliers" className="nav-link active" aria-current="page" href="#">
                  Suppliers
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Link
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default HeaderNavbar;
