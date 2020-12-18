import React, { useEffect, useState } from 'react'
import { observer } from "mobx-react"
import Weather from '../../../../Store/Index'
import Slider from '@material-ui/core/Slider'

const MAX = 70
const MIN = -40
const STEP = 1

function valueLabelFormat(value) {
    return `${Math.round(value*10)/10}`
}

const NonLinearSlider = observer(({ onChange }) => {
    const [value, setValue] = useState(Weather.temp)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
    useEffect(() => {
        let celsiusTemperature = Math.round((Weather.temp - 273.15) * 10) / 10
        setValue(celsiusTemperature)
    }, [Weather.temp])

    let fillPercentage = Math.round((value - MIN) * 100 / (MAX - MIN))

    useEffect(() => {
        onChange(Math.round(fillPercentage / 10))
    }, [Math.round(fillPercentage / 10)])

    return (
        <div>
            <Slider
                value={value}
                min={MIN}
                step={STEP}
                max={MAX}
                scale={x => x}
                getAriaValueText={valueLabelFormat}
                valueLabelFormat={valueLabelFormat}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="non-linear-slider"
            />
        </div>
    )
})

export default NonLinearSlider

