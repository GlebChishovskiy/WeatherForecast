import { lazy, Suspense, useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios'

const Auth = lazy(() => import('./Components/Auth/Auth'))
const Hello = lazy(() => import('./Components/Hello/Hello'))
const Profile = lazy(() => import('./Components/Profile/Profile'))

const App = () => {

  const [users, setUsers] = useState()
  useEffect(() => {
    axios.get(`http://localhost:3001/users`).then(({ data }) => {
      setUsers(data)
    })
  }, [])

  const [currentUser, setCurrentUser] = useState([])

  return (
    <Router>
      <Suspense fallback='Loading...'>
        <Switch>
          <Route exact path='/' component={Hello} />
          <Route path='/auth' >
            <Auth setUsers={setUsers} users={users} setCurrentUser={setCurrentUser} />
          </Route>
          <Route path='/profile/:userId?'>
            <Profile currentUser={currentUser} />
          </Route>
        </Switch>
      </Suspense>
    </Router >
  )
}

export default App
