import React from 'react';
import Problem from './problem.js';
import p1 from './p1.js';

const App = (props) => {
  return (
    <div><h1>Test</h1>
      <Problem url="/api" problem={p1}></Problem>
    </div>
  )
}

export default App;
