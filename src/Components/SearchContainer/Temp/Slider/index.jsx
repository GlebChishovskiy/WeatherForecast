import React, { useEffect } from 'react'
import { observer } from "mobx-react"
import Weather from '../../../../Store'
import Slider from '@material-ui/core/Slider'
import { convertKelvinToCelsius, convertKelvinToFahrenheit, convertCelsiusToFahrengeit } from '../../../../Utils'
import { MIN, MAX } from '../../../../Utils'
import style from './index.module.css'

const STEP = 1

const NonLinearSlider = observer(() => {

    const handleChange = (event, newValue) => {
        Weather.setValue(newValue)
    }

    useEffect(() => {
        if (Weather.isCelsius) {
            Weather.setValue(convertKelvinToCelsius(Weather.temp))
        } else {
            Weather.setValue(convertKelvinToFahrenheit(Weather.temp))
        }
    }, [Weather.temp, Weather.isCelsius])

    return (
        <section className={style.wrapper}>
            <h2 className={style.header}>
                Move the ram and choose the temperature you would like to meet
            </h2>
            <Slider
                value={Weather.value}
                min={Weather.isCelsius ? MIN : convertCelsiusToFahrengeit(MIN)}
                max={Weather.isCelsius ? MAX : convertCelsiusToFahrengeit(MAX)}
                step={STEP}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="non-linear-slider"
            />
        </section>
    )
})

export default NonLinearSlider

