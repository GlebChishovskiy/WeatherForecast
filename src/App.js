import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Weather from './Store'
import { observer } from 'mobx-react'
import Preloader from './Components/Preloader'
import style from './App.module.css'

///Choose country

const importAll = (r) => r.keys().map(r)
export const images = importAll(require.context('./Img', false, /\.(png)$/))

const SearchContainer = lazy(() => import('./Components/SearchContainer'))
const Main = lazy(() => import('./Components/Main'))
const Footer = lazy(() => import('./Components/Footer'))

const App = () => {

  return (
    <div className={style.wrapper} style={{ 'backgroundImage': `url(${Weather.backgroundPage >= images.length ? null : images[Weather.backgroundPage].default})` }} >
      <Router>
        <Suspense fallback={<Preloader />}>
          <Switch>
            <Route exact path='/' component={Main} />
            {!Weather.fetchCity && !Weather.fetchState ?
              <Route path={`/search/:city?/:temperatureUnit?`} render={() => <SearchContainer />} /> : <Preloader />}
          </Switch>
          {!Weather.fetchCity && !Weather.fetchState ?
            <Route path='/' component={Footer} /> : null}
        </Suspense>
      </Router>

    </div>
  )
}

export default observer(App)

