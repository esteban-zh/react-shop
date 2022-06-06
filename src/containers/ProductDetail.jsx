import React, {useContext} from 'react'
import close from '@icons/icon_close.png';
import ProductInfo from '@components/ProductInfo';
import AppContext from '@context/AppContext';
import '@styles/ProductDetail.scss';

const ProductDetail = () => {
  const { state } = useContext(AppContext);

  return (
    <aside className="product-detail">
        <div className="product-detail-close">
            <img src={close} alt="close" />
        </div>
        <ProductInfo />
    </aside>
  )
}

export default ProductDetail