import WeatherInformation from './WeatherInformation/WeatherInformation'
import style from './Temp.module.css'
import NonLinearSlider from './Slider/Slider'

const Temp = ({onChange}) => {

  return (
    <div className={style.wrapper}>
      <NonLinearSlider onChange={onChange} />
      <WeatherInformation />
    </div>
  )
}

export default Temp

