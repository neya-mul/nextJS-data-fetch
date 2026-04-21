import ProductCard from '@/components/ProductCard';
import React from 'react'
export const dynamic = 'force-dynamic';

export default async function Products() {
  const res = await fetch('http://localhost:5000/products', { cache: 'force-cache' })
  const products = await res.json()
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
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
