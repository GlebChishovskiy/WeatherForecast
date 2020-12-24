import './App.css'
import React from 'react'
import Time from './Components/Time'

const DEFAULT_COUNTER_VALUE = 20

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      number: 0,
      time: DEFAULT_COUNTER_VALUE
    }

    this.increment = this.increment.bind(this)
    this.restart = this.restart.bind(this)
  }
  increment() {
    this.setState(state => ({
      number: state.number + 1
    }))
  }

  decrement() {
    if (this.state.time > 0) {
      this.setState(state => ({
        time: state.time - 1
      }))
    }
  }

  restart() {
    this.setState({
      time: DEFAULT_COUNTER_VALUE,
      number: 0
    })
  }

  componentDidMount() {
    this.timer = setInterval(() => this.decrement(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.restart}>RESTART</button>
        <Time time={this.state.time} />
        <div>{this.state.number}</div>
        <button disabled={!this.state.time} onClick={this.increment}>CLICK</button>
      </div>
    )
  }
}

export default App
