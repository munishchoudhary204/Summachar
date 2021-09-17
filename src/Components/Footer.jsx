import React from "react";
import { Row, Col, Container } from "react-bootstrap";
const Footer = () => {
  return (
    <>
      {/* for desktop */}

      <Container
        fluid
        style={{ backgroundColor: "#852ADB" }}
        className="d-none d-sm-block mt-4 py-3"
      >
        <Container>
          <Row
            style={{ color: "white" }}
            className="align-items-center "
            xs="auto"
            lg={4}
            md={4}
          >
            <Col>About Us</Col>
            <Col>Privacy Terms</Col>
            <Col>Copyright</Col>
            <Col className="d-flex align-items-center ">
              Follow Us On :
              <i
                className="fab fa-facebook fa-2x p-2"
                style={{ color: "white" }}
              ></i>
              <i
                className="fab fa-instagram fa-2x p-2"
                style={{ color: "white" }}
              ></i>
              {/* <i
                className="fab fa-youtube fa-2x p-2"
                style={{ color: "white" }}
              ></i> */}
              <i
                className="fab fa-twitter fa-2x p-2"
                style={{ color: "white" }}
              ></i>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* for mobile */}
      <Container
        fluid
        style={{ backgroundColor: "#852ADB" }}
        className="d-block d-sm-none mt-4"
      >
        <Container>
          <Row style={{ color: "white" }} className="align-items-center py-3">
            <Col className="d-flex justify-content-center">
              About Us
              <br /> Privacy Terms <br />
              Copyright
            </Col>
            <Col className=" ">
              <i
                className="fab fa-facebook fa-2x p-1"
                style={{ color: "white" }}
              ></i>
              <i
                className="fab fa-instagram fa-2x p-1"
                style={{ color: "white" }}
              ></i>
              <br />
              <i
                className="fab fa-youtube fa-2x p-1"
                style={{ color: "white" }}
              ></i>
              <i
                className="fab fa-twitter fa-2x p-1"
                style={{ color: "white" }}
              ></i>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Footer;
