import React, { FunctionComponent } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import { SocialMediaSection } from './SocialMediaSection';
import config from '../config';

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
      <Container className="mb-5 d-flex flex-column justify-content-center">
        <Row>
          <Col xs={1} lg={1} md={1} />
          <Col className="text-center text-light">
            <h1 className="pb-3 mb-2">{`Hi, I'm ${config.name}!`}</h1>
          </Col>
          <Col xs={1} lg={1} md={1} />
        </Row>
        <Row>
          <Col xs={5} lg={5} md={5} />
          <Col className="text-center text-light">
            <Dropdown.Divider className="mb-4" />
          </Col>
          <Col xs={5} lg={5} md={5} />
        </Row>
        <Row>
          <Col lg={2} />
          <Col lg={8} xs={12} md={12} className="text-center text-light">
            <SocialMediaSection />
          </Col>
          <Col lg={2} />
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
