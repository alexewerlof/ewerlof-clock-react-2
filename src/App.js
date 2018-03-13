import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Face from './Face'
import Hour from './Hour'
import Minute from './Minute'
import Second from './Second'
import { color } from './settings'
import { DateHelper, Poly } from './util'

class App extends Component {
  state = {
    cPoly: new Poly(200, 200)
  }

  requestAnimationFrameCallback = () => {
    this.tick()
    this.scheduleNextTick()
  }

  tick() {
    this.setState({
      time: new DateHelper()
    })
  }

  scheduleNextTick() {
    this.requestId = requestAnimationFrame(this.requestAnimationFrameCallback)
  }

  componentWillMount() {
      this.tick()
  }

  componentDidMount() {
      this.scheduleNextTick()
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.requestId)
  }

  render() {
    return (
      <svg width={this.state.width} height={this.state.height} style={ {backgroundColor: color.bg} }>
          <Face bgColor={color.face} indicatorColor={color.indicator} {...this.state}></Face>
          <Hour color={color.hour} {...this.state}></Hour>
          <Minute color={color.minute} {...this.state}></Minute>
          <Second color={color.second} {...this.state}></Second>
      </svg>
    );
  }
}

export default App;
