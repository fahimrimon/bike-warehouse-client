import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth } from "../firebase.init";
const Header = () => {
  const [user] = useAuthState(auth);
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
              <Nav.Link as={Link} to="/blogs">
                Blog
              </Nav.Link>
              {user ? 
              <React.Fragment>
                <Nav.Link as={Link} to="/home">
                Manage Items
              </Nav.Link>
              <Nav.Link as={Link} to="/additem">
                Add Items
              </Nav.Link>
              <Nav.Link as={Link} to="/home">
                My Items
              </Nav.Link>
                <Nav.Link onClick={() => signOut(auth)} as={Link} to="/">
                Logout
              </Nav.Link>
              </React.Fragment>
              : (<Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>)
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
