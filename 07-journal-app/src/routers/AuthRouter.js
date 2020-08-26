import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import LoginScreen from 'components/auth/LoginScreen'
import RegisterScreen from 'components/auth/RegisterScreen'

const AuthRouter = () => {
  return (
    <div>
      <h1>Auth Header</h1>
      <hr />
      <Switch>
        <Route path="/auth/login" component={ LoginScreen } />
        <Route path="/auth/register" component={ RegisterScreen } />
        <Redirect to="/auth/home" />
      </Switch>

    </div>
  )
}

export default AuthRouter
