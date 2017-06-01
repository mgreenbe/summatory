import React from 'react'

const containerStyle = {
  display: 'inline-flex',
  alignItems: 'stretch',
}

const columnStyle = {
  display: 'flex',
  flexDirection: 'column'
}

const lStyle = {
  width: '0.9ex',
  borderTop: 'solid 0.2ex black',
  borderBottom: 'solid 0.2ex black',
	borderLeft: 'solid 0.35ex black',
	borderRight: 'none',
  marginRight: '0.5ex',
  display: 'flex',
  flexDirection: 'column'
}

const cellStyle = {
  margin: '5px',
  width: '10ex'
}

const rStyle = {
  width: '0.9ex',
  borderTop: 'solid 0.2ex black',
  borderBottom: 'solid 0.2ex black',
	borderRight: 'solid 0.35ex black',
	borderLeft: 'none',
  marginLeft: '0.5ex',
  display: 'flex',
  flexDirection: 'column'
}

const Row = ({row, i, changeHandler}) => {
  return <div style={{display: 'flex'}}>
    {row.map( (entry, j) => 
      <input
        key={`${i}${j}`}
        style={cellStyle}
        value={entry}
        onChange={changeHandler.bind(null, i, j)}
      />
    )}
  </div>
}

const Rows = ({rows, changeHandler}) => {
  return <div style={columnStyle}>
    {rows.map( (row, i) => <Row key={i} row={row} i={i} changeHandler={changeHandler} /> )}
  </div>
}

class Matrix extends React.Component {
  constructor(props) {
    super(props)
    this.state = {value: props.value}
    this.changeHandler = this.changeHandler.bind(this);
  }
  componentWillReceiveProps({value}) {
    this.setState({value});
  }
  changeHandler(i, j, event) {
    this.setState({
      value: this.setEntry(
        this.state.value, i, j, event.target.value
      )
    })
  }
  setEntry(matrix, i, j, value) {
    const newRowi = [...matrix[i]];
    newRowi[j] = value;
    const newMatrix = [...matrix]
    newMatrix[i] = newRowi
    return newMatrix;
  }
  render() {
    return <div style={containerStyle}>
      <div style={lStyle}></div>
        <Rows rows={this.state.value} changeHandler={this.changeHandler} />
      <div style={rStyle}></div>
    </div>
  }
}

export default Matrix;
