import React from 'react';
import './App.css';
import { ParticlesWrapper } from './components/ParticlesWrapper';
import TitlePage from './titlePage/TitlePage';
import { NavBar } from './components/NavBar';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { About } from './about/Abouts';
import { Portfolio } from './portfolio/Portfolio';

const App = () => {
  const handleScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    console.log('scrolled!');
    console.log(e.currentTarget.getBoundingClientRect());
  };
  return (
    <div className="bg-dark">
      <ParticlesWrapper />
      <NavBar />
      <TitlePage checkScroll={handleScroll} />
      <Container onScroll={handleScroll} fluid>
        <About />
        <Portfolio />
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
    </div>
  );
};

export default App;
