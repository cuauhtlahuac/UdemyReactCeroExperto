import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NavBar from './NavBar';

import AboutScreen from './AboutScreen';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import NotFound from './NotFound';

const AppRouter = () => {
  return (
    <div>
      <Router>
        <NavBar />

        <Switch>

        <Route exact path="/about" component={ AboutScreen } />
        <Route exact path="/login" component={ LoginScreen } />
        <Route exact path="/" component={ HomeScreen } />
        <Route component={NotFound} />
            
        </Switch>
      </Router>
    </div>
  )
}

export default AppRouter
