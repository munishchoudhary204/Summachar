import React from "react";
import { Row, Col, Card, Container } from "react-bootstrap";

const Cards = ({ stp }) => {
  return (
    <>
      <Container className="mt-3">
        <Row xs={2} md={3} lg={4} className="g-4">
          {Array.from({ length: 10 }).map((_, idx) => (
            <Col>
              <Card>
                <Card.Img variant="top" src="" />
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Cards;
