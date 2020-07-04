import React from 'react';
import './App.css';
import { ParticlesWrapper } from './components/ParticlesWrapper';
import TitlePage from './components/TitlePage';
import { NavBar } from './components/NavBar';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const App = () => {
  const handleScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    console.log('scrolled!');
    console.log(e.currentTarget.getBoundingClientRect());
  };
  return (
    <React.Fragment>
      <ParticlesWrapper />
      <NavBar />
      <TitlePage checkScroll={handleScroll} />
      <Container onScroll={handleScroll} fluid>
        <Row>
          <Col className="text-light text-center">Test1</Col>
        </Row>
        <Row>
          <Col className="text-light text-center">Test1</Col>
        </Row>
        <Row>
          <Col className="text-light text-center">Test1</Col>
        </Row>
        <Row>
          <Col className="text-light text-center">Test1</Col>
        </Row>
        <Row>
          <Col className="text-light text-center">Test1</Col>
        </Row>
        <Row>
          <Col className="text-light text-center">Test1</Col>
        </Row>
        <Row>
          <Col className="text-light text-center">Test1</Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default App;
