import React from 'react'

export default function ProductCard({ product }) {
    return (
        <div className="card w-96 bg-base-100 card-sm shadow-sm mx-auto">
            <div className="card-body">
                <h2 className="card-title">{product.name}</h2>
                <p>{product.category}</p>
                <p>Price : {product.price}</p>
                <div className="justify-end card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    )
}
