import React from 'react'
import cart from '@icons/bt_add_to_cart.svg';
import '@styles/ProductInfo.scss';

const ProductInfo = ( {product} ) => {

  console.log("producto de info",product)

  return (
    <>
      <img src={product.images[0]} alt="img" />
      <div className="points">
        <span />
        <span />
        <span />
      </div>
      <div className="product-info">
        <p>$ {product.price}</p>
        <p>{product.title}</p>
        <p>
          {product.description} 
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