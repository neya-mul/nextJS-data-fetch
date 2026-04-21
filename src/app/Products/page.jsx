import ProductCard from '@/components/ProductCard';
import React from 'react'

export default async function Products() {
  const res = await fetch('http://localhost:5000/products')
  const products = await res.json()
  // console.log(products);

  return (
    <div className='max-w-[1300px] mx-auto p-10'>
      <div>
        <h1>Products: {products.length}</h1>
      </div>
      <div className='grid grid-cols-3 gap-3 '>
        {
          products.map(product => <ProductCard product={product} key={product.id}></ProductCard>)
        }
      </div>

    </div>
  )
}
