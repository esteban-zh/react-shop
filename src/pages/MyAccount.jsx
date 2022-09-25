import React from 'react';
import { Link } from 'react-router-dom';
import '@styles/MyAccount.scss';

const MyAccount = () => {
  return (
    <div className="login">
        <div className="form-container">
            <h1 className="title">My account</h1>
            <form action="/" className="form">
              <label htmlFor="name" className="label"> Name</label>
              <p className="value">Esteban Zapata </p>
              <label htmlFor="email" className="label"> Email address</label>
              <p className="value">Esteban@gmail.com</p>
              <label htmlFor="password" className="label"> Password</label>
              <p className="value">*********</p>
              <Link to="/sign-up">
                <input type="submit" value="Edit" className="secondary-button edit-button" />
              </Link>
              <Link className='home' to="/">Home</Link>            
            </form>
        </div>
    </div>

  )
}

export default MyAccount;