import { observer } from 'mobx-react'
import { useState } from 'react'
import Weather from '../../../../Store/Index'
import style from './WeatherInformation.module.css'



const WeatherInformation = observer(() => {

    let celsiusTemperature = Math.round((Weather.temp - 273.15) * 10) / 10
    let fahrenheitTemperature = Math.round(((Weather.temp - 273.15) * 9 / 5 + 32) * 10) / 10

    const [isCelsius, setIsCelsius] = useState(true)

    return (
        <div>
            <div className={style.location}>
                <span>City: {Weather.nameCity}, </span>
                <span>Country: {Weather.country}</span>
            </div>
            <div className={style.temp_precipitation}>
                <div className={style.temp}>
                    {
                        isCelsius ?
                            <span>{celsiusTemperature} ℃ </span> :
                            <span>{fahrenheitTemperature} °F </span>
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

