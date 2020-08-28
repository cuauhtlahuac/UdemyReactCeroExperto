import React from 'react'
import { Link } from 'react-router-dom'

const RegisterScreen = () => {
  return (
    <React.Fragment>
      <h3 className="auth__title mb-4">Login</h3>
      <form autoComplete="off">
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="auth__input"
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          className="auth__input"
        />
        <input
          type="text"
          placeholder="Password"
          name="password"
          className="auth__input"
        />

      <input
        type="text"
        placeholder="Confirm password"
        name="Password2"
        className="auth__input"
      />

      <button
       type="submit"
       className="btn btn-primary btn-block mt-2 mb-4"
      >
        register
      </button>

      <Link
					to="/auth"
					className="link"
      >
        You already register?
      </Link>

    </form>
  </React.Fragment>
  )
}

export default RegisterScreen
