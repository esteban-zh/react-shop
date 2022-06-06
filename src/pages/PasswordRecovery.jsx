import React from 'react'
import yard from '@logos/logo_yard_sale.svg';
import '@styles/PasswordRecovery.scss';

const PasswordRecovery = () => {
  return (
    <div className="login">
        <div className="form-container">
            <img src={yard} alt="logo" className="logo" />
            <h1 className="title"> Password recovery</h1>
            <p className="subtitle"> Inform the email address used to create your account</p>
            <form action="/" className="form">
            <label htmlFor="password" className="label"> Email address</label>
            <input type="password" id="password" placeholder="esteban@gmail.com" className="input input-password" />
            <input type="submit" value="Submit" className="primary-button login-button" />
            <a href="#">Back to login</a>
            </form>
        </div>
    </div>
  )
}

export default PasswordRecovery;