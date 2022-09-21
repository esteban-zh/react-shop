import React from 'react'
import { ProductItem } from "@components/ProductItem";
import useGetProducts from '@hooks/useGetProducts';
import {API} from '@constants/index.js'
import '@styles/ProductList.scss';


const ProductList = () => {

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

export default ProductList;