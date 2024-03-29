import React, { useContext, useCallback } from 'react'
import AppContext from "@context/AppContext";
import close from '@icons/icon_close.png'
import '@styles/ShoppingCartItem.scss'

const ShoppingCartItem = ( {product, indexValue} ) => {
  const { removeToCart } = useContext(AppContext);
  console.log("se renderiza shooping")
  const handleClickRemoveToCart = useCallback(index => {
    removeToCart(index), [index];
  }) 

  return (
    <>
        <div className="product-card">
            <img src={product.images[0]} alt={product.title} />
            <p className="name">{product.title}</p>
            <p className="price">${product.price}</p>
            <img src={close} alt  onClick={()=> handleClickRemoveToCart(indexValue)}/>
        </div>
    </>

  )
}

export default ShoppingCartItem;