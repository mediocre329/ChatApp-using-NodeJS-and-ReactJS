import React from 'react'
import {Nav, Navbar, Container, Button} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
// import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <LinkContainer to="/">
            <Navbar.Brand>ChatApp</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/Login">
                <Nav.Link>Login</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/chat">
                <Nav.Link>Chat</Nav.Link>
            </LinkContainer>


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default Navigation