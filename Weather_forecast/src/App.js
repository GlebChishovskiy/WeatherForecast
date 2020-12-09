import { useEffect, useRef } from "react"
import axios from 'axios'
import { observer } from "mobx-react"
import { observable } from "mobx"
import SimpleMap from './Components/Hello/Hello'

const Weather = observable({

  nameCity: "London",
  temp: 0,
  coord: {
    lon:0,
    lat:0
  },

  setCoord: function (newCoordLon, newCoordLat) {
    return this.coord = {
      lon:newCoordLon,
      lat:newCoordLat
    }
  },

  setTempInCity: function (newTemp) {
    return this.temp = Math.round((newTemp - 273.15)*10)/10
  },

  setNameCity: function (newName) {
    return this.nameCity = newName
  }

})

const App = () => {

  const refInput = useRef()

  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${Weather.nameCity}&appid=f746fe34b04088e9840201a09aa1d89b`).then(({ data }) => {
      Weather.setTempInCity(data.main.temp)
      Weather.setCoord(data.coord.lon,data.coord.lat)
      console.log(Weather.coord)
    })
  }, [Weather.nameCity])

  const setCity = () => {
    Weather.setNameCity(refInput.current.value)
  }

  return (
    <div>
      <input ref={refInput} defaultValue='London' type="text" />
      <button onClick={setCity}> Найти </button>
      <div>
        <span>{Weather.nameCity}:</span>
        <span> {Weather.temp} °C</span>
      </div>
      <SimpleMap lon={Weather.coord.lon} lat={Weather.coord.lat}/>
    </div>
  )
}

export default observer(App)
