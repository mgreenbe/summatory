import React from 'react';

class Problem extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {};
  }
  componentDidMount() {
    const setState = this.setState.bind(this);
    fetch(`${this.props.url}/${this.props.problem.name}`)
      .then(function(response) {return response.json()})
      .then(function(body) {setState(body)})
  }
  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }
  handleSubmit(event) {
    event.preventDefault();
    const setState = this.setState.bind(this);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    const init = {
      method: 'POST',
      headers,
      body: JSON.stringify(this.state)
    };
    fetch(this.props.url, init)
      .then( response => response.json() )
      .then( json => setState(json) )
  }
  render() {
    const P = this.props.problem;
    const props = {
      context: this.state,
      handleChange: this.handleChange,
      handleSubmit: this.handleSubmit
    };
    return <P {...props}/>
  }
}

export default Problem;
