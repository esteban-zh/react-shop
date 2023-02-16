import React, { memo } from 'react'
import { ProductItem } from "@components/ProductItem";
import useGetProducts from '@hooks/useGetProducts';
import {API} from '@constants/index.js'
import '@styles/ProductList.scss';


const ProductList = () => {
console.log("se renderiza esto con el cambio de theme")
  const products = useGetProducts(API);

  return (
    <section className="main-container">
        <div className="cards-container">
            {products.map(product => (
            <ProductItem product={product} key={product.id} />
            ))}
        </div>
    </section>
  )
}

export default memo(ProductList);