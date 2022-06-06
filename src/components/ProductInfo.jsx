import React from 'react'
import suplemets from '@logos/suplementos.jpg';
import cart from '@icons/bt_add_to_cart.svg';
import '@styles/ProductInfo.scss';

const ProductInfo = () => {
  return (
    <>
      <img src={suplemets} alt="img" />
      <div className="points">
        <span />
        <span />
        <span />
      </div>
      <div className="product-info">
        <p>$ 100,00</p>
        <p>Nitro tech</p>
        <p>
          Nitro-Tech is a scientifically engineered, enhanced whey protein
          formula designed for all athletes who are looking for more muscle,
          more strength and better performance.
        </p>
        <button className="primary-button add-to-cart-button">
          <img src={cart} alt="cart" />
          Add to cart
        </button>
      </div>
    </>
  );
}

export default ProductInfo