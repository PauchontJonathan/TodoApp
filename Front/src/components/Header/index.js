import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './header.scss';

const Header = () => {
  return (
    <Navbar className="d-flex flex-row justify-content-between" bg="dark" expand="lg">
      <Navbar.Brand as={NavLink} exact to="/" className="text-white">TodoList</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" width="10%">
          <Nav.Link as={NavLink} to="/signin" className="text-white" >Se connecter</Nav.Link>
          <Nav.Link as={NavLink} to="/signup" className="text-white" >S'inscrire</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header;