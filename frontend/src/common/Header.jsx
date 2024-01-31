import React from 'react';
import { Container, Nav, Navbar, NavbarBrand ,NavDropdown} from 'react-bootstrap';

function Header() {
  return (
    <div className='head'>
  <Navbar expand="lg" className='bg-body-tertiary'>
    <Container>
    
    <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
          <Nav className="me-auto">
            <img src='/logo1.jpg' alt='logo' width="50px" height="40px"></img>
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Doctors" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Surgeons">Surgeons</NavDropdown.Item>
              <NavDropdown.Item href="/Neurologist">Neurologist</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/AppointMent">AppointMent</Nav.Link>
            <Nav.Link href="/Services">Services</Nav.Link>
            <Nav.Link href="/AboutUs">AboutUs</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
            <Nav.Link href="/Login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Container>
  </Navbar>
  </div>
  )
}

export default Header