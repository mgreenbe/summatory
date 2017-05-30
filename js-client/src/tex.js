import katex from 'katex';
import 'katex/dist/katex.min.css';
import React from 'react';

class TeX extends React.Component {
    componentWillReceiveProps(nextProps) {
    if (nextProps.children !== this.props.children && !!(this.elt)) {
      katex.render(
        nextProps.children,
        this.elt,
        {displayMode: nextProps.displayMode}
      );
    }
  } // need this for fields to update!
  componentDidMount() {
    const displayMode = !!this.props.displayMode;
    katex.render(this.props.children, this.elt, {displayMode});
    /*const tex = this.props.children;
        if (typeof tex === 'string') {
      const elt = this.elt;
      const displayMode = this.props.displayMode;
      katex.render(tex, elt, {displayMode});
    }
    else
    {
      console.error(`The TeX component can only contain text content.`);
    }*/
  }
  render() {
    return <span ref={elt => this.elt = elt}></span>
  }
}

export default TeX;


