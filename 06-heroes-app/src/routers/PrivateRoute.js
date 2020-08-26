import React from 'react'
import PropTypes from 'prop-types'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {

  const handleAuth = ( props ) => { // props que provee router
      if (isAuthenticated) {
        return <Component {...props} />
      } else {
        return <Redirect to="/login" />
      }
   }

  return (
    <Route 
        { ...rest } 
        component={handleAuth}
    />
  )
}

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired ,
  rest: PropTypes.any
}

export default PrivateRoute
