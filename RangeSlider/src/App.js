import React from 'react'
import Slider from './Components/Slider/Slider'

const STEP = 2
const MIN = -120
const MAX = 120
const VALUE = 50

const App = () => {

  return (

    <Slider value={VALUE} step={STEP} min={MIN} max={MAX} diameterCircle={30} widthRangeSlider={500} />

  )
}

export default App
