import React, {Component} from 'react'

import './css/Timer.css'
import playImage from './images/play.png'

class Timer extends Component {

  static defaultProps = {
    hurryTime: 60
  };

  state = {
    showTimer: false,
    timeLeft: this.props.duration,
    hurryTime: this.props.hurryTime
  };

  tick = () => {
    if (this.state.showTimer) {
      this.setState(prevState => ({
        timeLeft: prevState.timeLeft === 0 ? 0 : prevState.timeLeft - 1
      }));
    }
  };

  componentDidMount = () => this.interval = setInterval(() => this.tick(), 1000);

  componentWillUnmount = () => clearInterval(this.interval);

  startTimer = () => {
    this.setState({
      showTimer: true
    })
  };

  render() {
    const state = this.state;

    const pad = val => ('00' + val).slice(-2);

    const getTime = () => state.timeLeft <= state.hurryTime
      ? state.timeLeft
      : `${pad(Math.trunc(state.timeLeft / 60))}:${pad(state.timeLeft % 60)}`;

    const style = state.timeLeft <= state.hurryTime ? {color: 'darkred', fontSize: '5rem'} : {};

    const content = state.showTimer
      ? <h1 style={style}>{getTime()}</h1>
      : <img onClick={this.startTimer} src={playImage} alt='start'/>;

    return (
      <div className='Timer'>
        {content}
      </div>
    )
  }
}

export default Timer;