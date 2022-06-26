import React, { Component } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function sign_Up() {
  let navigate=useNavigate()
  return (
    <div>
        <div className="Login_background">
        <div className="container">
        <form  id="createAccount" onSubmit={()=>navigate('/')}>
          <h1 className="form__title">Create Account</h1>
          <div className="form__message form__message--error"></div>
          <div className="form__input-group">
            <input
              type="text"
              id="signupUsername"
              className="form__input"
              autofocus
              placeholder="Username"
            />
            <div className="form__input-error-message"></div>
          </div>
          <div className="form__input-group">
            <input
              type="text"
              className="form__input"
              autofocus
              placeholder="Email Address"
            />
            <div className="form__input-error-message"></div>
          </div>
          <div className="form__input-group">
            <input
              type="password"
              className="form__input"
              autofocus
              placeholder="Password"
            />
            <div className="form__input-error-message"></div>
          </div>
          <div className="form__input-group">
            <input
              type="password"
              className="form__input"
              autofocus
              placeholder="Confirm password"
            />
            <div className="form__input-error-message"></div>
          </div>
          <button className="form__button" type="submit">Continue</button>
          <p className="form__text">
            <Link className="form__link" to='/' id="linkLogin"
              >Already have an account? Sign in</Link>
          </p>
        </form>
        </div>
        </div>
      </div>
    
  )
}

export default sign_Up