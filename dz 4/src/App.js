import React from 'react'
import Strip from './Components/Strip/Strip'

const App = () => {

  const widthRangeSlider = 500
  const step = 2
  const min = -200
  const max = 150

  return (

    <Strip step={step} min={min} max={max} widthRangeSlider={widthRangeSlider} />

  )
}

export default App
