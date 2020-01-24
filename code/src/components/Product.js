import React from 'react'
import { useSelector } from 'react-redux'

export const Product = () => {
  const product = useSelector(state => state.products.product)

  if (!product) return null

  console.log('product', product)

  return (
    <>
      <h1>{product.product && product.product.product_name}</h1>
      <img src={product.product && product.product.image_nutrition_url} />
    </>
  )
}
