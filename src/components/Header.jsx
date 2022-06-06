import React, { useState, useContext } from 'react'
import Menu from '@components/Menu';
import MyOrder from '@containers/MyOrder';
import menu from '@icons/icon_menu.svg';
import yard from '@logos/logo_yard_sale.svg';
import cart from '@icons/icon_shopping_cart.svg';
import flechita from '@icons/flechita.svg'
import AppContext from  '@context/AppContext';
import '@styles/Header.scss';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  const { state } = useContext(AppContext);

  const handleToggle = () => {
      setToggle(!toggle);
  }

  const handleToggleOrders = () => {
      setToggleOrders(!toggleOrders);
  }

  return (
    <nav>
        <div className="nav-menu">
            <img className="menu" src={menu} alt="menu" />
            <img className="yard" src={yard} alt="logo" />
            <ul>
                <li>
                    <a href="/">All</a>
                </li>
                <li>
                    <a href="/">Clothes</a>
                </li>
                <li>
                    <a href="/">Electronics</a>
                </li>
                <li>
                    <a href="/">Furniture</a>
                </li>
                <li>
                    <a href="/">Toys</a>
                </li>
                <li>
                    <a href="/">Others</a>
                </li>
            </ul>
        </div>
        <div className="sign-cart">
            <ul>
            <li className="signin" >
                <span>Esteban@gmail.com </span> 
                <img onClick={handleToggle} src={flechita} alt="flechita" />
            </li>
            <li className="icons">
                <img onClick={handleToggleOrders} src={cart} alt="cart" />
                {state.cart.length > 0 ? <div>{state.cart.length}</div> : null }
            </li>
            </ul>
        </div>       
        {toggle && <Menu />}
        {toggleOrders && <MyOrder />}       
    </nav>

  )
}

export default Header;

