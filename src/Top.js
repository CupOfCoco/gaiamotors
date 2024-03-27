import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styles from '../src/App.css';

const Top = () => {
  return (
    <Navbar bg="light-gradient" data-bs-theme="white" expand="lg" className={styles.navbar}>
    <Container className={styles.navbarContainer}>
      <Navbar.Brand text="white" as={NavLink} to="/"  >GAIAcars</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
        <Nav.Link as={NavLink} to="/" className={styles.navLink}>HOME</Nav.Link>
        <Nav.Link as={NavLink} to="/featured" className={styles.navLink}>FEATURED</Nav.Link>
        <Nav.Link as={NavLink} to="/product" className={styles.navLink}>PRODUCTS</Nav.Link>
        <Nav.Link as={NavLink} to="/contact" className={styles.navLink}>CONTACT</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default Top;
