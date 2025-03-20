import React from 'react';
import Sidebar from './Sidebar';
import Canvas from './Canvas';
import './Builder.css';


const Builder = () => {
  return (
    <div className="builder-container">
      <Sidebar />
      <Canvas />
    </div>
  );
};

export default Builder;
