import React from 'react';
import './App.css';
import { ParticlesWrapper } from './components/ParticlesWrapper';
import TitlePage from './components/TitlePage';

const App = () => {
  return (
    <React.Fragment>
      <div className="content">
        <div>
          <TitlePage />
        </div>
      </div>
      <ParticlesWrapper />
    </React.Fragment>
  );
};

export default App;
