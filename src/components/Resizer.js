import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Resizer extends Component {
  constructor(props) {
    super(props);

    this.sequenceInterval = null;

    this.state = {
      sequenceIndex: 0,
      width: this.props.sequence[0]
    };

    this.nextInSequence = this.nextInSequence.bind(this);
    this.renderChildren = this.renderChildren.bind(this);
  }

  nextInSequence() {
    this.setState({
      sequenceIndex: (this.state.sequenceIndex + 1) % this.props.sequence.length
    });
  }

  componentDidMount() {
    this.sequenceInterval = setInterval(
      this.nextInSequence,
      this.props.frequency
    );
  }

  componentWillUnmount() {
    if (this.sequenceInterval) {
      clearInterval(this.sequenceInterval);
    }
  }

  getRootClasses() {
    return {
      margin: "0 auto",
      transition: `width ${this.props.speed / 1000}s`,
      width: this.props.sequence[this.state.sequenceIndex]
    };
  }

  renderChildren() {
    if (typeof this.props.children === "function") {
      return this.props.children(this.props.sequence[this.state.sequenceIndex]);
    }

    return this.props.children;
  }

  render() {
    return <div style={this.getRootClasses()}>{this.renderChildren()}</div>;
  }
}

Resizer.defaultProps = {
  sequence: [320, 576, 900],
  frequency: 1500,
  speed: 500
};

Resizer.propTypes = {
  sequence: PropTypes.arrayOf(PropTypes.number),
  frequency: PropTypes.number,
  speed: PropTypes.number
};
