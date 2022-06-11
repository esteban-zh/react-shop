import React, {useContext} from 'react'
import close from '@icons/icon_close.png';
import ProductInfo from '@components/ProductInfo';
import AppContext from '@context/AppContext';
import DetailsContext from '@context/DetailsContext';
import '@styles/ProductDetail.scss';

const ProductDetail = () => {
  const { stateDetail } = useContext(DetailsContext);

  return (
    <aside className="product-detail">
        <div className="product-detail-close">
            <img src={close} alt="close" />
        </div>
        <ProductInfo product={stateDetail.detail[0]}/>
    </aside>
  )
}

export default ProductDetail