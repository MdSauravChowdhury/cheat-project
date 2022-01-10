import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useHistory } from 'react-router-dom'
const NavbarComponent = () => {
  const history = useHistory()
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand onClick={ () => history.push('/')} href="#">React-Redux-Json</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Add</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
