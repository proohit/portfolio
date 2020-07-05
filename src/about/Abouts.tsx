import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import config from '../config';

export const About = () => {
  return (
    <Container
      id="about"
      className="bg-transparent border border-secondary rounded text-light d-flex justify-content-center flex-column"
    >
      <Row>
        <Col className="text-center m-4">
          <h2>About me</h2>
        </Col>
      </Row>
      <Row>
        <Col lg={2} md={2} />
        <Col className="text-justify">
          <p>
            My name name is {config.fullName} and I'm an information systems
            student from Germany. I'm a passionate developer who loves to sneak
            into different technologies.
          </p>
          <p>
            Currently, I'm enrolled in the business informatics / information
            systems bachelor's degree at the{' '}
            <a
              className="badge badge-secondary"
              href="https://www.hdm-stuttgart.de/en"
            >
              Stuttgart Media University
            </a>
            . Right now, I'm passing the fifth semester of the 7 semester long
            degree which includes an internship. I'm having this @
            <a
              className="badge badge-secondary"
              href="https://www.exxeta.com/en/"
            >
              EXXETA AG
            </a>{' '}
            in Stuttgart.
          </p>
        </Col>
        <Col lg={2} md={2} />
      </Row>
    </Container>
  );
};
