import React from 'react'
import Select from './Components/Select/Select'

const options = ['blue', 'red', 'pink', 'yellow', 'green', 'violet']

class App extends React.Component {
  state = {
    value: options[0],
    wrapperStyle: {
      backgroundColor: options[0],
      minHeight: '100vh',
    }
  }

  chooseOption = (color) => {
    this.setState({
      value: color,
      wrapperStyle: {
        backgroundColor: color,
        minHeight: '100vh'
      }
    })
  }

  render() {
    return (
      <div style={this.state.wrapperStyle}>
        <Select
          options={options}
          onChange={this.chooseOption}
          value={this.state.value}
        />
      </div>
    )
  }
}

export default App
