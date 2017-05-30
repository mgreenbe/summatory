import React from 'react';
import TeX from './tex.js';

const p1 = ({context, handleChange, handleSubmit}) => {
  return (
    <div>
      <p>
        Solve the system of equations:
      </p>
      <div>
        <TeX displayMode={true}>{`${context.A}\\begin{bmatrix}x\\\\y\\end{bmatrix}=${context.B}`}</TeX>
      </div>
      <p>
        Answer:
      </p>
      <div style={{textAlign: 'center'}}>
        <label>
          <TeX>x=</TeX> <input name='x' onChange={handleChange} style={{width: '30px'}} />
        </label> , 
        <label style={{marginLeft: '10px'}}>
          <TeX>y=</TeX> <input name='y' onChange={handleChange} style={{width: '30px'}} />
        </label>
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default p1;
