import React from 'react';

const TitlePage = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%',
        paddingTop: '12%',
        textAlign: 'center',
      }}
    >
      <h1>Portfolio</h1>
      <h2>Direnc Timur</h2>
      <h3>Learn more about me!</h3>
      <div>
        <div className="gg-arrow-down slide-top" />
      </div>
    </div>
  );
};

export default TitlePage;
