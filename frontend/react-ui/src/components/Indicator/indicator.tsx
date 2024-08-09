// src/Indicator.js
import React from 'react';
import './style.css';

const Indicator = ({ color }) => {
  return <div className={`indicator ${color}`}></div>;
};

export default Indicator;


// sample template to use:

// return (
//     <div className="App">
//       <h1>Indicators</h1>
//       <Indicator color="yellow" />
//       <Indicator color="red" />
//       <Indicator color="green" />
//     </div>
//   );