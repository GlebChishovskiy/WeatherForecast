import WeatherInformation from './WeatherInformation'
import style from './index.module.css'
import NonLinearSlider from './Slider'
import CitiesCertainTemperature from './CitiesCertainTemperature'

const Temp = () => {

  return (
    <div className={style.wrapper}>
      <NonLinearSlider />
      <WeatherInformation />
      <CitiesCertainTemperature />
    </div>
  )
}

export default Temp

