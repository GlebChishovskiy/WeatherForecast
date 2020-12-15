import { observer } from "mobx-react"
import Weather from '../../Store/Index'
import Slider from "./Slider/Index";

export const Temp = observer(({ onChange }) => {
  return (
    <div>
      <span>{Weather.temp}℃</span>
      <Slider onChange={onChange} step={0.1} min={-40} max={70} diameterCircle={30} widthRangeSlider={500} />
    </div>
  )
})

