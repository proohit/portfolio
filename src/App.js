import React from "react";
import "./App.css";
import Particles from "react-particles-js";
const App = () => {
  return (
    <div className="App">
      Portfolio
      <Particles
        params={{
          particles: {
            number: {
              value: 50,
            },
            size: {
              value: 3,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode:"grab",
              },
            },
          },
        }}
      />
    </div>
  );
};

export default App;
