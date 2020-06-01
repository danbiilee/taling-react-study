//copied from https://reactjs.org/
import React, { Component } from 'react';

class Timer extends Component {
  //Nothing to do in this class, but feel free to take a look

  state = { seconds: 0 };

  tick() {
    this.setState(state => ({
      seconds: state.seconds + 1
    }));
  }

  componentDidUpdate(prevProps) {
    if (this.props.running !== prevProps.running) {
        if (this.props.running === true) {
        this.interval = setInterval(() => this.tick(), 1000);
        }
        else {
        clearInterval(this.interval);
        }
    }
  }

  formatTime(secs) {
    // referenced from https://stackoverflow.com/a/39426527
    let hours   = Math.floor(secs / 3600);
    let minutes = Math.floor(secs / 60) % 60;
    let seconds = secs % 60;
    return [hours, minutes, seconds]
        .map(v => ('' + v).padStart(2, '0'))
        .filter((v,i) => v !== '00' || i > 0)
        .join(':');
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        Elapsed: {this.formatTime(this.state.seconds)}
      </div>
    );
  }
}

export default Timer;