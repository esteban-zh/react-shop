import React from 'react'
import { Link } from 'react-router-dom'
// import AuthContext from '@context/AuthContext'
import '@styles/MenuDesktop.scss'

const Menu = () => {
//   const {stateAuth, handleAuth} = useContext(AuthContext);
//   console.log("authstate en menu", authState)

//   const handleMenuAuth = () => {
    // handleAuth();
    // console.log("se hace evento auth sign up link", stateAuth)
//   }
  return (
    <div className="menu-desktop">
        <ul>
            <li>
                <Link to="/orders">My orders</Link>
            </li>
            <li>
                <Link to="/my-account">My account</Link>
            </li>
            <li>
                <Link to="/">sign out</Link>
            </li>
        </ul>
    </div>
  )
}

export default Menu;