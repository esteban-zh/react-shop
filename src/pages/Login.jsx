import React, { useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import '@styles/Login.scss';
import AuthContext from '@context/AuthContext';

const Login = () => {
  const form = useRef(null);
  const {handleAuth, stateAuth}= useContext(AuthContext);

  console.log("al dar clik en creat llega a login", stateAuth);

  const handleSubmit = (/*event*/) => {
    // event.preventDefault();
    // const formData = new FormData(form.current);
    // const data = {
    //   username: formData.get('email'),
    //   password: formData.get('password')
    // }
    // console.log(data);
    handleAuth();
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
            {/* <Link to="/my-account" onClick={handleSubmit}>
            <input type= "submit" value="Login" className="primary-button login-button"
            />
            </Link> */}
            <Link to="/my-account">
            <button className="primary-button login-button" onClick={handleSubmit}
            > log in</ button>
            </Link>
            <a href="#"> Forgot my password</a>
            <button value="" className="primary-button signup-button" >sign up</ button>
            </form>
        </div>
    </div>
  )
}

export default Login;