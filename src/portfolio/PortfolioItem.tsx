import React, { FunctionComponent } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

interface PortfolioItemProps {
  body: string;
  title: string;
  imgSrc?: string;
  buttonClicked?: () => void;
}

export const PortfolioItem: FunctionComponent<PortfolioItemProps> = (props) => {
  const { body, title, buttonClicked, imgSrc } = props;
  return (
    <Card className="mb-4">
      {imgSrc && <Card.Img src={imgSrc} />}
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{body}</Card.Text>
        {buttonClicked && (
          <Button variant="primary" onClick={buttonClicked}>
            View Project
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};
