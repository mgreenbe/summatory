import React from 'react';
import TeX from './tex.js';

const p1 = ({context}) => {
  return (
    <div>
      <h2>{context}</h2>
      <p>
        <TeX displayMode={true}>\int_a^bf'(x)dx = f(b)-f(a)</TeX>
      </p>
    </div>
  )
}

export default p1;
