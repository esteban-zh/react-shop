import React from 'react';
import '@styles/Checkout.scss';

const Checkout = () => {
  return (
    <div className="orders-container">
        <h2 className="title">My orders</h2>
        <div className="order-card">
            <div className="info">
                <p className="date">04.25.2021</p>
                <p className="quantity">5 articles</p>
            </div>
            <p className="total-price">$ 560.00</p>
        </div>
    </div>
  )
}

export default Checkout;