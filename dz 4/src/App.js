import React from 'react'
import Slider from './Components/Slider/Slider'

const STEP = 20
const MIN = -120
const MAX = 120

const App = () => {

  return (

    <Slider step={STEP} min={MIN} max={MAX} diameterCircle={30} widthRangeSlider={500} />

  )
}

export default App
