import React from 'react';
import '@styles/NewPassword.scss';
import logo from '@logos/logo_yard_sale.svg';

const NewPassword = () => {
  return (
     <div className="login">
        <div className="form-container">
            <img src={logo} alt="logo" className="logo"/>
            <h1 className="title"> create a new password</h1>
            <p className="subtitle"> enter a new password for your account</p>
            <form action="/" className="form">
                <label htmlFor="password" className="label"> password</label>
                <input type="password" id="password" placeholder="*********" className="input input-password"/>
                <label htmlFor="new-password" className="label">New password</label>
                <input type="password" id="new-password" placeholder="*********" className="input input-password"/>
                <input type="submit" value="confirm" className="primary-button login-button"/>
            </form>
        </div>
    </div>
  )
}

export default NewPassword;