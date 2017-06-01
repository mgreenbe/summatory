import React from 'react';
import Problem from './problem.js';
import p1 from './p1.js';
import FormWrapper from './my-form.js';
import TeX from './tex.js';
import Matrix from './matrix.js';
const Form = function(props) {
  const {Input, Button} = this;
  return <div>
    <p>Evaluate the integral:</p>
    <TeX displayMode={true}>{"\\int_0^xe^{-t^2}dt"}</TeX>
    <label htmlFor="my-input">What's your name?</label> <Input id="my-input" name="my-input" type="number" />
    <Button>Submit</Button>
  </div>
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: [[0, 1, 1], [2, 3, 5]]};
    this.clickHandler = this.clickHandler.bind(this);
  }
  setEntry(matrix, i, j, value) {
    const newRowi = [...matrix[i]];
    newRowi[j] = value;
    const newMatrix = [...matrix]
    newMatrix[i] = newRowi
    return newMatrix;
  }
  clickHandler() {
    console.log("Clicked!");
    const newState = this.setEntry(this.state.value, 0, 0, 7);
    console.log(newState);
    this.setState({value: newState});
  }
  render() {
    return <div style={{padding: '20px'}}>
      <Problem url="/api" problem={p1}></Problem>
      <Problem url="/api" problem={p1}></Problem>
      <FormWrapper Form={Form} />
      <br /><br /><Matrix value={this.state.value} />
    </div>
  }
}



export default App;
