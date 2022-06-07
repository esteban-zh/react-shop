import React, { useContext } from 'react'
import AppContext from "@context/AppContext";
import close from '@icons/icon_close.png'
import '@styles/ShoppingCartItem.scss'

const ShoppingCartItem = ( {product} ) => {
  const { removeToCart } = useContext(AppContext);
  console.log("product de shooping",product)

  const handleClickRemoveToCart = product => {
    removeToCart(product);
  }

  return (
    <>
        <div className="product-card">
            <img src={product.images[0]} alt={product.title} />
            <p className="name">{product.title}</p>
            <p className="price">${product.price}</p>
            <img src={close} alt  onClick={()=> handleClickRemoveToCart(product)}/>
        </div>
    </>

  )
}

export default ShoppingCartItem