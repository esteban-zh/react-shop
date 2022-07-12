import React, {useState, useContext} from 'react'
import close from '@icons/icon_close.png';
import ProductInfo from '@components/ProductInfo';
import DetailsContext from '@context/DetailsContext';
import '@styles/ProductDetail.scss';

const ProductDetail = ({setToggle}, {toggle}) => {
  const { stateDetail } = useContext(DetailsContext);

  return (
    <aside className="product-detail">
        <div onClick={()=>setToggle(toggle)} className="product-detail-close">
            <img  src={close} alt="close" />
        </div>
       <ProductInfo product={stateDetail.detail[0]}/>
    </aside>
  )
}

export default ProductDetail