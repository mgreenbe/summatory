import React from 'react';
import Problem from './problem.js';
import p1 from './p1.js';
import FormWrapper from './my-form.js';
import TeX from './tex.js';

const Form = function(props) {
  const {Input, Button} = this;
  return <div>
    <p>Evaluate the integral:</p>
    <TeX displayMode={true}>{"\\int_0^xe^{-t^2}dt"}</TeX>
    <label htmlFor="my-input">What's your name?</label> <Input id="my-input" name="my-input" type="number" />
    <Button>Submit</Button>
  </div>
}

const App = function(props) {
  return <div style={{padding: '20px'}}>
    <Problem url="/api" problem={p1}></Problem>
    <Problem url="/api" problem={p1}></Problem>
    <FormWrapper Form={Form} />
  </div>
}

export default App;
