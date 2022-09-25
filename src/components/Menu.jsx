import React from 'react'
import { Link } from 'react-router-dom'
import '@styles/MenuDesktop.scss'

const Menu = () => {
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
                <Link to="/">sign up</Link>
            </li>
        </ul>
    </div>
  )
}

export default Menu;