import React, { FunctionComponent } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const TitlePage: FunctionComponent<{
  checkScroll: (e: React.UIEvent<HTMLDivElement, UIEvent>) => void;
}> = (props) => {
  const { checkScroll } = props;
  return (
    <Container
      onScroll={checkScroll}
      fluid
      className="vh-100 d-flex align-items-center"
    >
      <Container className="d-flex flex-column justify-content-center">
        <Row>
          <Col md={4} />
          <Col className="text-center text-light">
            <h1 className="border-bottom pb-3 mb-2">Hi, I'm Direnc!</h1>
          </Col>
          <Col md={4} />
        </Row>
        <Row>
          <Col md={4} />
          <Col className="text-center text-light">Learn more about me!</Col>
          <Col md={4} />
        </Row>
      </Container>
      <div
        style={{
          bottom: 25,
        }}
        className="position-absolute d-flex w-100 align-items-end justify-content-center"
      >
        <div className="text-center text-light gg-arrow-down slide-top" />
      </div>
    </Container>
  );
};

export default TitlePage;
