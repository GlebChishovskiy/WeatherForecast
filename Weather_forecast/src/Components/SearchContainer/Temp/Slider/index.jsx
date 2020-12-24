import React, { useEffect } from 'react'
import { observer } from "mobx-react"
import Weather from '../../../../Store'
import Slider from '@material-ui/core/Slider'
import { conversionToCelsius } from '../../../../Utils'
import { MIN, MAX } from '../../../../Utils'

const STEP = 1

const NonLinearSlider = observer(() => {

    const handleChange = (event, newValue) => {
        Weather.setValue(newValue)
    }

    useEffect(() => {
        Weather.setValue(+conversionToCelsius(Weather.temp))
    },[Weather.temp])

    return (
        <div>
            <Slider
                value={Weather.value}
                min={MIN}
                step={STEP}
                max={MAX}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="non-linear-slider"
            />
        </div>
    )
})

export default NonLinearSlider

