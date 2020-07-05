import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faTwitter,
  faXing,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import Nav from 'react-bootstrap/Nav';
import config from '../config';

export const SocialMediaSection = () => {
  return (
    <Nav className="justify-content-around">
      <Nav.Item>
        <Nav.Link
          target="_blank"
          href={config.gitHubLink}
          className="text-light "
        >
          <FontAwesomeIcon size="3x" icon={faGithub} />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          target="_blank"
          href={config.twitterLink}
          className="text-light"
        >
          <FontAwesomeIcon size="3x" icon={faTwitter} />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          target="_blank"
          href={config.linkedInLink}
          className="text-light"
        >
          <FontAwesomeIcon size="3x" icon={faLinkedin} />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link target="_blank" href={config.xingLink} className="text-light">
          <FontAwesomeIcon size="3x" icon={faXing} />
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};
