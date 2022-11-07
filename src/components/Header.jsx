import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Menu from "@components/Menu";
import MenuMobile from "@components/MenuMobile";
import MyOrder from "@containers/MyOrder";
import menu from "@icons/icon_menu.svg";
import yard from "@logos/logo_yard_sale.svg";
import cart from "@icons/icon_shopping_cart.svg";
import flechita from "@icons/flechita.svg";
import AppContext from "@context/AppContext";
import AuthContext from "@context/AuthContext";
import ThemeContext from '@context/ThemeContext';

import "@styles/Header.scss";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  const [touch, setTouch] = useState(false);
  const { state } = useContext(AppContext);
  const navigate = useNavigate();
  const { stateAuth } = useContext(AuthContext);
  const { stateTheme, handleTheme } = useContext(ThemeContext);

console.log("statetheme en header", stateTheme)

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleToggleOrders = () => {
    setToggleOrders(!toggleOrders);
  };

  const handleTouch = () => {
    setTouch(!touch);
  };

  const handleClick = () => navigate("/");

  return (
    <nav>
      <div className="nav-menu">
        <img
          onTouchStart={handleTouch}
          className="menu"
          src={menu}
          alt="menu"
        />
        <img onClick={handleClick} className="yard" src={yard} alt="logo" />
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
      {touch && <MenuMobile />}
      <div className="sign-cart">
        <ul>
          <Form className="black">
            <Form.Switch
              htmlFor="black"
              type="switch"
              id="custom-switch"
              label="Dark theme"
              onClick={handleTheme}
            />
          </Form>
          {/* <Form className="light">
            <Form.Switch
              htmlFor="light"
              type="switch"
              id="custom-switch"
              label="light theme"
              onClick={handleTheme}
            />
          </Form> */}
          <li className="signin">
            {stateAuth ? (
              <Link to="/sign-up">
                <span>Hello guest Sign Up </span>
              </Link>
            ) : (
              <Link to="/sign-up">
                <span> Hello User </span>
              </Link>
            )}
            <img onClick={handleToggle} src={flechita} alt="flechita" />
          </li>
          <li className="icons">
            <img onClick={handleToggleOrders} src={cart} alt="cart" />
            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
          </li>
        </ul>
      </div>
      {toggle && <Menu />}
      {toggleOrders && (
        <MyOrder
          toggleOrders={toggleOrders}
          setToggleOrders={setToggleOrders}
        />
      )}
    </nav>
  );
};

export default Header;
