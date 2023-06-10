import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './Header.css'

const Header = () => {
  
    return (

    <Navbar className="Navbar" collapseOnSelect expand="lg" bg='light' variant="dark" sticky="top">
    <Container>
    <img src='https://deshcareer.com/logo/short-logo.png' alt='' style={{width:'200px'}}></img>
      
      <Navbar.Brand href="#home"></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto"></Nav>
        <Nav className="nav-item gap-4 fs-5 text-center ">
          <Link className="text-dark item" style={{ textDecoration: "none" }} to="/">Home</Link>
          <Link className="text-dark item" style={{ textDecoration: "none" }} to="/privacy">Privacy Policy</Link>
          <Link className="text-dark item" style={{ textDecoration: "none" }} to="/terms&condition">TermsConditions</Link>
          <Link className="text-dark item" style={{ textDecoration: "none" }} to="/aboutUs">About Us</Link>
          <Link className="text-dark item" style={{ textDecoration: "none" }} to="/contactUs">Contact Us</Link>
          <Link className="text-dark item" style={{ textDecoration: "none" }} to="/advertisement">Advertise</Link>
          <button className='bg-danger border rounded'>
              <Link className="text-dark bg-danger " style={{textDecoration:"none"}}>Join Now</Link>
           </button>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

    );
};

export default Header;