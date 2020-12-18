import { Suspense, useState, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import a from './Img/1.png'
import b from './Img/2.png'
import c from './Img/3.png'
import d from './Img/4.png'
import e from './Img/5.png'
import f from './Img/6.png'
import g from './Img/7.png'
import h from './Img/8.png'
import i from './Img/9.png'
import j from './Img/10.png'
import k from './Img/11.png'

const SearchContainer = lazy(() => import('./Components/SearchContainer/SearchContainer'))
const Main = lazy(() => import('./Components/Main/Index'))

const Wrapper = styled.div`
height:100vh;
overflow-y: hidden;
transition: background-image 1.5s;
`

const images = [a, b, c, d, e, f, g, h, i, j, k]

const App = () => {

  const [imagePage, setImagePage] = useState()

  return (
    <Wrapper style={{ 'background-image': `url(${images[imagePage]})` }} imagePage={imagePage}>
      <Router>
        <Suspense fallback={<div>Загрузка...</div>}>
          <Switch>
            <Route exact path='/' component={Main} />
            <Route path={`/search/:city?`} render={() => <SearchContainer onChange={setImagePage}/>} />
          </Switch>
        </Suspense>
      </Router>
    </Wrapper>
  )
}

export default App

