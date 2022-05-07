import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

import { Link } from "react-router-dom";
const Header = () => {
  // const [user] = useAuthState(auth);
  return (
    <>
      <Navbar collapseOnSelect expand="lg" sticky="top" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/home">
            Bike-Warehouse
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto"></Nav>
            <Nav>
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/services">
                Services
              </Nav.Link>
              <Nav.Link as={Link} to="/reviews">
                Reviews
              </Nav.Link>
              <Nav.Link as={Link} to="/blogs">
                Blogs
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About me
              </Nav.Link>
              {/* {user ? (<Nav.Link onClick={() => signOut(auth)} as={Link} to="/">
                Logout
              </Nav.Link>) : (<Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>)
              } */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
