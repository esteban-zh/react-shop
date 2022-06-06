import React, { useRef } from 'react';
import '@styles/Login.scss';

const Login = () => {
  const form = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      username: formData.get('email'),
      password: formData.get('password')
    }
    console.log(data);
  }
  return (
     <div className="login">
        <div className="form-container">
            <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
            <form action="/" className="form" ref= {form}>
            <label htmlFor="email" className="label"> Email address</label>
            <input type="email" name="email" placeholder="example@gmail.com" className="input input-email" />
            <label htmlFor="password" className="label"> password</label>
            <input type="password" name="password" placeholder="***********" className="input input-password" />
            <button className="primary-button login-button" onClick={handleSubmit} > log in</ button>
            <a href="#"> Forgot my password</a>
            <button value="" className="primary-button signup-button" >sign up</ button>
            </form>
        </div>
    </div>
  )
}

export default Login;