import React, {Component} from 'react'
import { useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom'
 
function Login() {
  let navigate= useNavigate()
  return (
    <div>
        <div className="Login_background">
        <div className='container'>
     <form className="form" id="login" onSubmit={()=>navigate('/user')}>
      <h1 className="form__title">Login</h1>
      <div className="form__message form__message--error"></div>
      <div className="form__input-group">
        <input
          type="text"
          className="form__input"
          autofocus
          placeholder="Username or email"
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
      <button className="form__button" type="submit">Continue</button>
      <p class="form__text">
        <Link className="form__link" to='/Forget_pass' id="linkCreateAccount"
          >Forgot your password? </Link>
      </p>
      <p className="form__text">
        <Link className="form__link" to='/Sign_Up' id="linkCreateAccount"
          >Don't have an account? Sign Up </Link>
      </p>
    </form>
    </div>
        </div>
      </div>
  )
}

export default Login