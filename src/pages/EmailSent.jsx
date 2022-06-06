import React from 'react';
import '@styles/EmailSent.scss';
import yard from '../../public/assets/logos/logo_yard_sale.svg';
import img_email from '../../public/assets/icons/email.svg';


const RecoveryPassword = () => {
  return (
    <div className="email">
        <div className="email-sent-container">
            <img src={yard} alt="logo" className="img img-yard"/>
            <h1 className="title"> Email has been sent!</h1>
            <p className="subtitle">please check your inbox for instructions on how to reset the password</p>
            <div className="img-email-container">
                <img src={img_email} alt="logo-email" className="img img-email"/>
            </div>
            <button type="submit" className="primary-button login-button"> Login</button>
            <p className="resend"> <span>didn't receive the email? </span>  <a href="#">resend</a></p>
        </div>
    </div>
  )
}

export default RecoveryPassword