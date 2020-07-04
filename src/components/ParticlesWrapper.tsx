import React from 'react';
import Particles, { MoveDirection } from 'react-tsparticles';

export const ParticlesWrapper = () => {
  return (
    <Particles
      params={{
        particles: {
          twinkle: {
            particles: {
              enable: true,
              frequency: 0.05,
              opacity: 0.8,
            },
          },
          number: {
            value: 60,
            density: {
              enable: true,
              value_area: 1500,
            },
          },
          line_linked: {
            enable: true,
            opacity: 0.03,
            distance: 125,
          },
          move: {
            direction: MoveDirection.bottom,
            enable: true,
            speed: 0.09,
          },
          size: {
            value: 1,
          },
        },
      }}
    />
  );
};
