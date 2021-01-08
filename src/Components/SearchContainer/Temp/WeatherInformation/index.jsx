import { observer } from 'mobx-react'
import Weather from '../../../../Store'
import style from './index.module.css'
import { convertKelvinToCelsius, convertKelvinToFahrenheit } from '../../../../Utils'
import { Link, useParams } from 'react-router-dom'
import { useEffect } from 'react'

const EMPTINESS = '----'

const WeatherInformation = observer(() => {
console.log(Weather.isCelsius);
    const param = useParams()

    useEffect(() => {
        param.temperatureUnit === 'celsius' ? Weather.setIsCelsius(true) : Weather.setIsCelsius(false)
    }, [param.temperatureUnit])

    return (
        <div className={style.wrapper}>
            <div className={style.location}>
                <span><b>City:</b> {Weather.nameCity ? Weather.nameCity : EMPTINESS}, </span>
                <span><b>Country:</b> {Weather.country ? Weather.country : EMPTINESS}</span>
            </div>
            <div className={style.temp_precipitation}>
                <div className={style.temp}>
                    {
                        Weather.isCelsius ?
                            <div>{Weather.nameCity ? convertKelvinToCelsius(Weather.temp) : EMPTINESS}&deg;C</div> ://тернарки правильно сделать две подряд ерунда
                            <div>{Weather.nameCity ? convertKelvinToFahrenheit(Weather.temp) : EMPTINESS}&deg;F</div>//nbsp оставались на одной строке сельсии
                    }
                    <Link className={style.button_change_unit_temperature} to={`/search/${Weather.nameCity}/celsius`}>
                        <div className={Weather.isCelsius ? style.active_button_temperature : style.inactive_button_temperature}
                            onClick={() => Weather.setIsCelsius(true)}>
                            &deg;C
                        </div>
                    </Link>
                    <Link className={style.button_change_unit_temperature} to={`/search/${Weather.nameCity}/fahrenheit`}>
                        <div className={!Weather.isCelsius ? style.active_button_temperature : style.inactive_button_temperature}
                            onClick={() => Weather.setIsCelsius(false)}>
                            &deg;F
                        </div>
                    </Link>
                </div>
                <div>
                    <div className={style.item}><b>Description:</b> {Weather.description ? Weather.description : EMPTINESS}</div>
                    <div className={style.item}><b>Humidity:</b> {Weather.humidity ? Weather.humidity : EMPTINESS}</div>
                    <div className={style.item}>
                        <span><b>Wind:</b> {Weather.speedWind ? Weather.speedWind : EMPTINESS}m/h, </span>
                        <span><b>Deg:</b> {Weather.degWind ? Weather.degWind : EMPTINESS}</span>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default WeatherInformation

