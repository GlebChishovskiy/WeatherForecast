import { lazy, Suspense, useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import axios from 'axios'

const Auth = lazy(() => import('./Components/Auth/Auth'))
const Hello = lazy(() => import('./Components/Hello/Hello'))
const Profile = lazy(() => import('./Components/Profile/Profile'))

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const [users, setUsers] = useState()

  useEffect(() => {
    axios.get(`http://localhost:3001/users`).then(({ data }) => {
      setUsers(data)
    })
  }, [])

  return (
    <Router>
      <Suspense fallback='Loading...'>
        <Route exact path='/' component={Hello} />
      </Suspense>
      <Suspense fallback='Loading...'>
        <Route path='/auth' render={() => <Auth setIsLoggedIn={setIsLoggedIn} setUsers={setUsers} users={users} />} />
      </Suspense>
      <Suspense fallback='Loading...'>
        <Route path='/profile/:userId?' render={() => <Profile isLoggedIn={isLoggedIn} users={users} />} />
      </Suspense>
    </Router >
  )
}

export default App
