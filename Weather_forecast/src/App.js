import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import Weather from './Store'
import { observer } from 'mobx-react'
import Preloader from './Components/Preloader'

const importAll = (r) => r.keys().map(r)
const images = importAll(require.context('./Img', false, /\.(png)$/));

const SearchContainer = lazy(() => import('./Components/SearchContainer'))
const Main = lazy(() => import('./Components/Main'))

const Wrapper = styled.div`
height:100vh;
overflow-y: hidden;
transition: background-image 1.5s;
`

const App = () => {

  return (
    <Wrapper style={{ 'background-image': `url(${Weather.backgroundPage == undefined ? null : images[Weather.backgroundPage].default})` }} >
      <Router>
        <Suspense fallback={<Preloader />}>
          <Switch>
            <Route exact path='/' component={Main} />
            {Weather.visiblePage ?
              <Route path={`/search/:city?`} render={() => <SearchContainer />} /> : <Preloader />}
          </Switch>
        </Suspense>
      </Router>
    </Wrapper>
  )
}

export default observer(App)

