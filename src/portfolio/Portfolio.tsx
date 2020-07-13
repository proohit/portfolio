import React from 'react';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import { Section } from '../components/Section';
import { PortfolioItem } from './PortfolioItem';

export const Portfolio = () => {
  return (
    <Jumbotron>
      <Section
        className="d-flex flex-column justify-content-center align-items-center"
        title="Projects"
      >
        <Row>
          <Col lg={3} md={4} sm={6} xs={12}>
            <PortfolioItem body="test" title="test" buttonClicked={() => {}} />
          </Col>
          <Col lg={3} md={4} sm={6} xs={12}>
            <PortfolioItem body="test" title="test" buttonClicked={() => {}} />
          </Col>
          <Col lg={3} md={4} sm={6} xs={12}>
            <PortfolioItem body="test" title="test" buttonClicked={() => {}} />
          </Col>
          <Col lg={3} md={4} sm={6} xs={12}>
            <PortfolioItem body="test" title="test" buttonClicked={() => {}} />
          </Col>
          <Col lg={3} md={4} sm={6} xs={12}>
            <PortfolioItem body="test" title="test" buttonClicked={() => {}} />
          </Col>
        </Row>
      </Section>
    </Jumbotron>
  );
};
