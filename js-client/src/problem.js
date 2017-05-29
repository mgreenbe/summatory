import React from 'react';

class Problem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {body: 'Loading...'};
  }
  componentDidMount() {
    if (this.props.url) {
    const setState = this.setState.bind(this);
    fetch(this.props.url)
      .then(function(response) {return response.text()})
      .then(function(body) {setState({context: body})})
    }
  }
  render() {
    const P = this.props.problem;
    const context = this.state.context;
    return <P context={context} />
  }
}

export default Problem;
