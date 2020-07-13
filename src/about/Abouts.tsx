import React from 'react';
import Badge from 'react-bootstrap/Badge';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import config from '../config';
import { Section } from '../components/Section';

export const About = () => {
  return (
    <Jumbotron fluid className="p-5">
      <Section fluid id="about" title="About me">
        <Row>
          <Col lg={2} md={2} />
          <Col className="text-justify">
            <p>
              My name name is {config.fullName} and I'm an information systems
              student from Germany. I'm a passionate developer who loves to
              sneak into different technologies.
            </p>
            <p>
              Currently, I'm enrolled in the business informatics / information
              systems bachelor's degree at the
              <Badge variant="secondary">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light"
                  href="https://www.hdm-stuttgart.de/en"
                >
                  Stuttgart Media University
                </a>
              </Badge>{' '}
              . Right now, I'm passing the fifth semester of the 7 semester long
              degree which includes an internship. I'm having this @
              <Badge variant="secondary">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light"
                  href="https://www.exxeta.com/en/"
                >
                  EXXETA AG
                </a>
              </Badge>{' '}
              in Stuttgart.
            </p>
          </Col>
          <Col lg={2} md={2} />
        </Row>
      </Section>
    </Jumbotron>
  );
};
