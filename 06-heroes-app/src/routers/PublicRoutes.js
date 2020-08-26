import React from 'react'
import PropTypes from 'prop-types'
import { Redirect, Route } from 'react-router-dom'

const PublicRoutes = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {

  const handleAuth = ( props ) => {
      if (!isAuthenticated) {
        return <Component {...props} />
      }
   }

  return (
    <Route 
        { ...rest } 
        component={ handleAuth }
    />
  )
}

PublicRoutes.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired ,
  rest: PropTypes.any
}

export default PublicRoutes
