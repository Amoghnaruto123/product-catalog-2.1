
import React from 'react'

const ProductCard = ({ name, price, description }) => {
    return (
        <div className="product-card">
            <h3>{name}</h3>
            <p className="price">₹{price}</p>
            <p className="description">{description}</p>
            <button>Add to Cart</button>
        </div>
    )
} 
export default ProductCard;

