import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <Navbar
        bg="warning"
        variant="dark"
        sticky="top"
        collapseOnSelect
        expand="lg"
      >
        <Container>
          <Navbar.Brand href="#home" className="text-danger fw-bold">
            The Tour Mania
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end ">
            <Nav.Link as={HashLink} to="/#home">
              Home
            </Nav.Link>
            <Nav.Link as={HashLink} to="/#services">
              Services
            </Nav.Link>
            <Nav.Link as={HashLink} to="/#experts">
              Tourist Guide
            </Nav.Link>
            <Nav.Link as={HashLink} to="/#about">
              About Us
            </Nav.Link>

            {user.email ? (
              <div>
                <NavDropdown
                  variant="text-light"
                  title="Manage Service"
                  id="basic-nav-dropdown"
                >
                  <Nav.Link className="text-black" as={HashLink} to="/order">
                    <button className="btn-danger">My Order</button>
                  </Nav.Link>
                  <Nav.Link className="text-black" as={HashLink} to="/manage">
                    <button className="btn-info">Manage</button>
                  </Nav.Link>
                  <br />
                  <Nav.Link
                    className="text-black"
                    as={HashLink}
                    to="/addservice"
                  >
                    <button className="btn-primary">Add Service</button>
                  </Nav.Link>
                </NavDropdown>
              </div>
            ) : (
              ""
            )}

            {user?.email ? (
              <Button
                onClick={logOut}
                className="Rounded btn-danger m-2"
                variant="black"
              >
                Logout
              </Button>
            ) : (
              <Nav.Link className="text-black" as={Link} to="/login">
                <button className="btn-danger">Login</button>
              </Nav.Link>
            )}

            <Navbar.Text>
              <a href="#login" className="text-black">
                {user?.displayName}
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <img
                style={{
                  borderRadius: "100%",
                  width: "50px",
                }}
                src={user?.photoURL}
                alt=""
              />
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
