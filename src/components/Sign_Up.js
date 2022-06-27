import React, { Component,useState,useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Sign_Up() {
  let navigate=useNavigate()
  const initial_values={Username:'',Email_address:'',Password:'',Confirmed_password:''}
  const [form_values, setform_values] = useState(initial_values)
  const [form_errors, setform_errors] = useState({})
  const [issubmit, setissubmit] = useState(false)
  const handleChange=(e)=>{
    const { name, value }=e.target
    setform_values({...form_values,[name]:value})
  
  }
  const handleSubmit=(e)=>{
    e.prevenetDefault()
    setform_errors(validation(form_values))
    setissubmit(true)
  }
  const validation=(values)=>{
    const errors={}
    const regex_pass = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})"
    const regex_email= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/
    if(!values.Username){
      errors.Username='Username is required for sign up'
    }
    if(!values.Email_address){
      errors.Email_address='Email address is required for sign up'
    }else if (!regex_email.test(values.email)){
      errors.Email_address='This is not a valid email id '
    }
    if(!values.Password){
      errors.Password='Password is required for sign up'
    }else if (!regex_pass.test(values.Password)){
      errors.Password='This password is not valid'
    }
    if(!values.Confirmed_password){
      errors.Confirmed_password='Confirmation of password is required for sign up'
    }
    if(values.Password!=values.Confirmed_password){
      errors.password_match='Password do not match'
    }
    return errors
  }
  useEffect(()=>{
    console.log(form_errors)
    if((Object.keys(form_errors).length===0)&(issubmit)){
      navigate('/')
    }
  },[form_errors])

  return (
    <div>
        <div className="Login_background">
        <div className="container">
        <form  id="createAccount" onSubmit={handleSubmit}>
          <h1 className="form__title">Create Account</h1>
          <div className="form__message form__message--error"></div>
          <div className="form__input-group">
            <input
              type="text"
              id="signupUsername"
              className="form__input"
              autoFocus
              placeholder="Username"
              name="Username"
              value={form_values.Username}
              onChange={handleChange}
            />
            <div className="form__input-error-message"></div>
          </div>
          <div className="form_error_message" style={{color:'red',textAlign:'center'}}>{form_errors.Username}</div>
          <div className="form__input-group">
            <input
              type="text"
              className="form__input"
              autoFocus
              placeholder="Email Address"
              name='Email_address'
              value={form_values.Email_address}
              onChange={handleChange}
            />
            <div className="form__input-error-message"></div>
          </div>
          <div className="form_error_message" style={{color:'red',textAlign:'center'}}>{form_errors.Email_address}</div>
          <div className="form__input-group">
            <input
              type="password"
              className="form__input"
              autoFocus
              placeholder="Password"
              name='Password'
              value={form_values.Password}
              onChange={handleChange}
            />
            <div className="form__input-error-message"></div>
          </div>
          <div className="form_error_message" style={{color:'red',textAlign:'center'}}>{form_errors.Password}</div>
          <div className="form__input-group">
            <input
              type="password"
              className="form__input"
              autoFocus
              placeholder="Confirm password"
              name='Confirmed_password'
              value={form_values.Confirmed_password}
              onChange={handleChange}
            />
            <div className="form__input-error-message"></div>
          </div>
          <div className="form_error_message" style={{color:'red',textAlign:'center'}}>{form_errors.Confirmed_password}</div>
          <div className="form_error_message" style={{color:'red',textAlign:'center'}}>{form_errors.password_match}</div>
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

export default Sign_Up