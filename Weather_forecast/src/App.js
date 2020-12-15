import { Suspense, useEffect, useState, lazy } from 'react'
import { observer } from "mobx-react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import Weather from './Store/Index'
import { Temp } from './Components/Temp/Temp'

const AllSearchCity = lazy(() => import('./Components/AllSearchCity/AllSearchCity'))
const Search = lazy(() => import('./Components/Search/Search'))

const Wrapper = styled.div`
overflow-y: hidden;
display: grid;
grid-template-columns: 1fr 1fr;
padding: 10px;
background-color:${props => props.colorPage};
transition: background-color 1s;
`

export const App = observer(() => {

  const [colorPage, setColorPage] = useState()

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${Weather.nameCity}&appid=f746fe34b04088e9840201a09aa1d89b`).then(res => res.json()
    ).then(data => {
      Weather.setTempInCity(data.main.temp)
      Weather.setCoord(data.coord.lon, data.coord.lat)
    }
    )
  }, [Weather.nameCity])

  return (
    <Wrapper colorPage={colorPage}>
      <Router>
        <Suspense fallback={<div>Загрузка...</div>}>
          <Switch>
            <Route exact path={`/search/:city?`} render={() => <Search />} />
            <Route exact path={`/allFilms/:textInput?`} render={() => <AllSearchCity />} />
          </Switch>
          <Temp onChange={setColorPage} />
        </Suspense>
      </Router>
    </Wrapper>
  )
})

