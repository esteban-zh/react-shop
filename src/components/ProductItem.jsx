import React, { useContext} from "react";
import ImgAddToCart from "@icons/bt_add_to_cart.svg";
import AppContext from "@context/AppContext";

import '@styles/ProductItem.scss';

export const ProductItem = ( {product} ) => {
  const { addToCart } = useContext(AppContext);

  const handleClickAddToCart = item => {
      addToCart(item);
  }

  return (
    <>
        <div className="product-card-item">
          <img src={product.images[0]} alt={product.tittle} />
          <div className="product-info">
            <div className="info">
              <p className="price">${product.price}</p>
              <p className="name">{product.title}</p>
            </div>
            <img onClick={() => handleClickAddToCart(product)} src={ImgAddToCart} alt="cart" />
          </div>
        </div>
    </>
  );
};
