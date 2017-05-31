import React from 'react';

const Input = function(props) {
  return <input
    onChange={this.change}
    value={(this.state || {})[props.name] || ''}
    {...props} // this is last so onChange can be overwritten
  />
}

const Button = function(props) {
  return <button onClick={this.submit} {...props}>{props.children}</button>
}

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    const { Form, ...otherProps } = props;
    this.Form = Form.bind(this);
    this.otherProps = otherProps;
    this.Input = Input.bind(this);
    this.Button = Button.bind(this);
    this.change = this.change.bind(this);
    this.submit = this.submit.bind(this);
  }
  change(event) {
    this.setState({[event.target.name]: event.target.value});
  }
  submit(event) {
    window.alert(JSON.stringify(this.state));
  }
  render() {
    return <this.Form {...this.state} {...this.otherProps} />
  }
}

export default MyForm;
