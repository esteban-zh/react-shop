import React from 'react'
import '@styles/CreateAccount.scss';

const CreateAccount = () => {
  return (
    <div className="login">
        <div className="form-container">
            <h1 className="title">My account</h1>
            <form action="/" className="form">
            <label htmlFor="name" className="label"> Name</label>
            <input type="text" id="name" placeholder="name" className="input input-name" />
            <label htmlFor="email" className="label"> Email address</label>
            <input type="email" id="email" placeholder="example@gmail.com" className="input input-email" />
            <label htmlFor="password" className="label"> Password</label>
            <input type="password" id="password" placeholder="*********" className="input input-password" />
            <input type="submit" value="Create" className="primary-button signup-button" />
            </form>
        </div>
    </div>

  )
}

export default CreateAccount;