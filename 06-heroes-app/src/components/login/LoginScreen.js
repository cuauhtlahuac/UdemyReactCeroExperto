import React from 'react'

const LoginScreen = (props) => {
  const handleLogin = () => {
    console.log(props);
  }

  return (
    <div className="m-5">
      <h1>Login</h1>
      <hr />
      <button className="btn btn-primary" onClick={handleLogin}> Login</button>
    </div>
  )
}

export default LoginScreen
