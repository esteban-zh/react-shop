import React from 'react'

import '@styles/MenuMobile.scss'

const MenuMobile = () => {
  return (
    <div className="container">
        <div className="categories">
            <h2>CATEGORIES</h2>
            <ul>
                <li><a href="/">All</a> </li>
                <li><a href="/">Clothes</a></li>
                <li><a href="/">Electronics</a></li>
                <li><a href="/">Furnitures</a></li>
                <li><a href="/">Toys</a></li>
                <li><a href="/">Others</a></li>
            </ul>
        </div>
        <div className="menu">
            <ul>
                <li><a href="/">My orders</a></li>
                <li><a href="/">My account</a></li>
                <li> camilayako@gmail.com </li>
                <li><a href="/">Sign out</a></li>
            </ul>
        </div>
    </div>

  )
}

export default MenuMobile