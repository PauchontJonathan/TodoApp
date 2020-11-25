import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav } from 'react-bootstrap';
import {NavLink, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './header.scss';

const Header = ({ logged, disconnectUser, userNickname }) => {

  const handleDisconnect = () => {
    disconnectUser();
  };

  return (
    <Navbar className="d-flex flex-row justify-content-between" bg="dark" expand="lg">
      <Navbar.Brand as={NavLink} exact to="/" className="text-white">TodoList</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" width="10%">
          { !logged && (
            <>
              <Nav.Link as={NavLink} to="/signin" className="text-white" >Se connecter</Nav.Link>
              <Nav.Link as={NavLink} to="/signup" className="text-white" >S'inscrire</Nav.Link>
            </>
          ) }
          { logged &&
          (
            <>
              <p className="text-white welcome">Bienvenue,{userNickname}</p><Nav.Link as={Link} onClick={handleDisconnect} className="text-white">Se déconnecter</Nav.Link>
            </>
          ) 
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header;

Header.propTypes = {
  disconnectUser: PropTypes.func.isRequired,
  logged: PropTypes.bool.isRequired,
  userNickname: PropTypes.string.isRequired,
};