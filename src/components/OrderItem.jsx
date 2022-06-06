import React from 'react'
import suplements from '@icons/suplementos.jpg'
import '@styles/OrderItem.scss';

const OrderItem = () => {
  return (
    <div className="orders-item">
        <div className="product-card">
            <img src={suplements} alt="img" />
            <p className="name">Whey protein</p>
            <p className="price">$ 120,00</p>
        </div>                       
    </div>

  )
}

export default OrderItem;