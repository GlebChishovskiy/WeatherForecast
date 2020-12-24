import { observer } from 'mobx-react'
import { useState } from 'react'
import Weather from '../../../../Store'
import style from './index.module.css'
import { conversionToCelsius, conversionToFahrenheit } from '../../../../Utils'

const WeatherInformation = observer(() => {

    const [isCelsius, setIsCelsius] = useState(true)

    return (
        <div>
            <div className={style.location}>
                <span>City: {Weather.nameCity ? Weather.nameCity: '----' }, </span>
                <span>Country: {Weather.country}</span>
            </div>
            <div className={style.temp_precipitation}>
                <div className={style.temp}>
                    {
                        isCelsius ?
                            <span>{Weather.nameCity ? conversionToCelsius(Weather.temp):'----'} ℃ </span> :
                            <span>{Weather.nameCity ? conversionToFahrenheit(Weather.temp):'----'} °F </span>
                    }
                    <button
                        className={isCelsius ? style.active : style.celsius} onClick={() => setIsCelsius(true)}>
                        ℃</button>
                    <button
                        className={!isCelsius ? style.active : style.celsius} onClick={() => setIsCelsius(false)} >
                        °F</button>
                </div>
                <div>
                    <div className={style.item}>Description: {Weather.description}</div>
                    <div className={style.item}>Humidity: {Weather.humidity}%</div>
                    <div className={style.item}>
                        <span>Wind: {Weather.speedWind} m/h, </span>
                        <span>Deg: {Weather.degWind}</span>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default WeatherInformation

