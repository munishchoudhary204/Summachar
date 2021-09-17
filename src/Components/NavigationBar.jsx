import React from "react";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Button,
  FormControl,
  Form,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <>
      {/* For Mobile */}

      <Navbar
        style={{ backgroundColor: "#852ADB" }}
        variant="dark"
        className="d-block d-sm-none "
      >
        <Container>
          <Navbar.Brand href="#home">
            <b>SUMMACHAR</b>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Form className="d-flex" style={{ color: "white" }}>
              <h5
                className=" px-2 py-1"
                style={{
                  marginRight: "12px",
                  background: "black",
                  borderRadius: "13px",
                }}
              >
                Open App
              </h5>
              <i class="fa fa-search fa-2x" aria-hidden="true"></i>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Navbar
        bg="light"
        style={{ overflowX: "auto", overflowY: "hidden" }}
        className="d-block d-sm-none "
      >
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link as={Link} to="/">
                All
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/coronavirus"
                style={{ paddingLeft: "20px" }}
              >
                Coronavirus
              </Nav.Link>
              <Nav.Link href="#link" style={{ paddingLeft: "20px" }}>
                India
              </Nav.Link>
              <Nav.Link href="#link" style={{ paddingLeft: "20px" }}>
                World
              </Nav.Link>
              <Nav.Link href="#link" style={{ paddingLeft: "20px" }}>
                Business
              </Nav.Link>
              <Nav.Link href="#link" style={{ paddingLeft: "20px" }}>
                Science&nbsp;&&nbsp;Tech
              </Nav.Link>
              <Nav.Link href="#link" style={{ paddingLeft: "20px" }}>
                Politics
              </Nav.Link>
              <Nav.Link href="#link" style={{ paddingLeft: "20px" }}>
                Sports
              </Nav.Link>
              <Nav.Link href="#link" style={{ paddingLeft: "20px" }}>
                Trivia
              </Nav.Link>
              <NavDropdown
                title="More"
                id="basic-nav-dropdown"
                style={{ paddingLeft: "20px" }}
              >
                <NavDropdown.Item href="#action/3.1">More</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* for desktop */}

      <Navbar
        style={{ backgroundColor: "#852ADB" }}
        variant="dark"
        className="d-none d-sm-block "
      >
        <Container>
          <Navbar.Brand href="#home">
            <h3>SUMMACHAR</h3>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <i
                class="fas fa-search fa-2x py-1 px-1"
                style={{
                  marginRight: "12px",
                  background: "white",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              ></i>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Navbar bg="light" className="d-none d-sm-block ">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link as={Link} to="/">
                All
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/coronavirus"
                style={{ paddingLeft: "20px" }}
              >
                Coronavirus
              </Nav.Link>
              <Nav.Link href="#link" style={{ paddingLeft: "20px" }}>
                India
              </Nav.Link>
              <Nav.Link href="#link" style={{ paddingLeft: "20px" }}>
                World
              </Nav.Link>
              <Nav.Link href="#link" style={{ paddingLeft: "20px" }}>
                Business
              </Nav.Link>
              <Nav.Link href="#link" style={{ paddingLeft: "20px" }}>
                Science&nbsp;&&nbsp;Tech
              </Nav.Link>
              <Nav.Link href="#link" style={{ paddingLeft: "20px" }}>
                Politics
              </Nav.Link>
              <Nav.Link href="#link" style={{ paddingLeft: "20px" }}>
                Sports
              </Nav.Link>
              <Nav.Link href="#link" style={{ paddingLeft: "20px" }}>
                Trivia
              </Nav.Link>
              <NavDropdown
                title="More"
                id="basic-nav-dropdown"
                style={{ paddingLeft: "20px" }}
              >
                <NavDropdown.Item href="#action/3.1">Food</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Robotics</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Travel</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
