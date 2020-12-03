import React from 'react'
import Slider from './Components/Slider/Slider'

const STEP = 1
const MIN = -200
const MAX = 150

const App = () => {

  return (

    <Slider step={STEP} min={MIN} max={MAX} diameterCircle={20} widthRangeSlider={500} />

  )
}

export default App
