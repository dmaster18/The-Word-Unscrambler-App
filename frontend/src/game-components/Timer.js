import React, { Component } from 'react';
import Countdown from "react-countdown";

const zeroPad = (number) => {
  if (number < 10) {
    return `0${number}`;
  } else {
    return number;
  }
}
export default class Timer extends Component {
  constructor(props) {
    super(props)
    this.state = {initialTime: null}
  }

  renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      return null
    } else {
      return <span>{zeroPad(minutes)}:{zeroPad(seconds)}</span>;
    }
  };

  componentDidMount() {
    this.setState(
      {initialTime: Date.now()
      }
    )
  }

  render() {
    if (this.state.initialTime) {
      return <Countdown date={this.state.initialTime + this.props.numberOfMilliseconds} renderer={this.renderer} onComplete={this.props.onComplete}/>
    } else {
      return null;
    }
  }

}
