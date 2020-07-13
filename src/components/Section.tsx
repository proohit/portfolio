import React, { FunctionComponent } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

interface SectionProps {
  title: string;
  id?: string;
  fluid?: boolean;
  className?: string;
}

export const Section: FunctionComponent<SectionProps> = (props) => {
  const { title, children, id, fluid, className } = props;
  return (
    <Container className={className} fluid={fluid} id={id}>
      <Row>
        <Col className="text-center m-4">
          <h1 className="display-4">{title}</h1>
        </Col>
      </Row>
      <Row>{children}</Row>
    </Container>
  );
};
