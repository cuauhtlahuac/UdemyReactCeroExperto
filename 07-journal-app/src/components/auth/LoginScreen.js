import React from 'react'

const LoginScreen = () => {
  return (
    <React.Fragment>
      <h3>Login</h3>
      <form>
        <input 
          type="text"
          placeholder="email"
          name="email"
        />
        
        <input 
          type="text"
          placeholder="password"
          name="password"
        />

        <button type="submit">
            Login
        </button>

        <hr/>
        google
      </form>
    </React.Fragment>
  )
}

export default LoginScreen
