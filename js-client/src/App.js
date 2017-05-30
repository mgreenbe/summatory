import React from 'react';
import Problem from './problem.js';
import p1 from './p1.js';

const App = (props) => {
  return (
    <div style={{padding: '20px'}}>
      <Problem url="/api" problem={p1}></Problem>
      <Problem url="/api" problem={p1}></Problem>
    </div>
  )
}

export default App;
