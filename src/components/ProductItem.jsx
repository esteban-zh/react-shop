import React, {useState, useContext} from "react";
import ImgAddToCart from "@icons/bt_add_to_cart.svg";
import AppContext from "@context/AppContext";
import DetailsContext from '@context/DetailsContext';
import ProductDetail from "@containers/ProductDetail";

import '@styles/ProductItem.scss';

export const ProductItem = ( {product} ) => {
  const { addToCart} = useContext(AppContext);
  const { showDetails } = useContext(DetailsContext);
  const [toggle, setToggle] = useState(false);

  const handleClickAddToCart = item => {
      addToCart(item);
  }
  const handleClickShowDetails = item1 => {
      showDetails(item1);
      setToggle(!toggle);
  }

  return (
    <>
        <div className="product-card-item">
          <img onClick={() => handleClickShowDetails(product)} src={product.images[0]} alt={product.title} />
          <div className="product-info">
            <div className="info">
              <p className="price">${product.price}</p>
              <p className="name">{product.title}</p>
            </div>
            <img onClick={() => handleClickAddToCart(product)} src={ImgAddToCart} alt="cart" />
          </div>
        </div>
        {toggle && <ProductDetail />}
    </>
  );
};
