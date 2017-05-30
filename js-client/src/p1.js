import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React from 'react';
import TeX from './tex.js';
import { Panel, Form, FormGroup, FormControl, Button, ControlLabel } from 'react-bootstrap';

const p1 = ({context, handleChange, handleSubmit}) => {
  const backgroundColor = context.backgroundColor || 'white';
  const equation = context.A
    + '\\begin{bmatrix}x\\\\y\\end{bmatrix}='
    + context.B;
  return (
    <Panel>
      <Form inline onSubmit={handleSubmit}>
        <p>Solve the system:
          <TeX>{equation}</TeX>
        </p>
        <FormGroup bsSize='small' controlId='x'>
          <ControlLabel><TeX>x=</TeX></ControlLabel>{' '}
          <FormControl
            value={context.x || ''}
            name='x'
            type='text'
            style={{width: '50px', backgroundColor}}
            onChange={handleChange}/>
        </FormGroup>{'   '}
        <FormGroup controlId='y'>
          <ControlLabel><TeX>y=</TeX></ControlLabel>{' '}
          <FormControl
            value={context.y || ''}
            name='y'
            type='text'
            style={{width: '50px', backgroundColor}}
            onChange={handleChange}
          />
        </FormGroup> {'   '}
        <Button type='submit'>Submit</Button>
      </Form>
    </Panel>
  )
}

export default p1;
