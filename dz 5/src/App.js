import { lazy, Suspense, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Auth = lazy(() => import('./Components/Auth/Auth'))
const Hello = lazy(() => import('./Components/Hello/Hello'))
const Profile = lazy(() => import('./Components/Profile/Profile'))

const App = () => {

  const [currentUser, setCurrentUser] = useState()
  const [logged, setLogged] = useState()

  return (
    <Router>
      <Suspense fallback='Loading...'>
        <div>
          <Switch>
            <Route exact path='/' component={Hello} />
            <Route path='/auth' >
              
              <Auth setCurrentUser={setCurrentUser} currentUser={currentUser} />
            </Route>
            <Route path='/profile/:userId?'>
              <Profile currentUser={currentUser} />
            </Route>
          </Switch>
        </div>
      </Suspense>
    </Router >
  )
}

export default App;
