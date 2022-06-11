import React, { useContext } from 'react'
import flecha from '@icons/icone-fleche-izq.png';
import ShoppingCartItem from '@components/ShoppingCartItem'
import AppContext from '@context/AppContext';
import '@styles/MyOrder.scss';

const MyOrder = () => {
  const { state } = useContext(AppContext);

  const sumTotal = () => {
      const sum = state.cart.map(product => product.price).reduce((prev, curr) => prev + curr, 0)
      return sum;
  }
  
  return (
   <div className="orders-container">
        <div className="shoping-cart-flecha">
            <img src={flecha} alt="flecha" />
            <span className="title-order">Shopping cart</span>
        </div>
        {state.cart.map((product, index) => (
          <ShoppingCartItem product={product} key={`ShoppingCartItem- ${index}`} indexValue={index}/>
        ))}       
        <div className="order-card">
            <div className="info">
              <p className="total">Total</p>
            </div>
            <p className="total-price">${sumTotal()}</p>
        </div>
        <button className="primary-button">
            Checkout
        </button>                          
   </div>

  )
}

export default MyOrder