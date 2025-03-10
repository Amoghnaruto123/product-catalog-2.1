
import React from 'react'

const ProductCard = ({ name, price, description, image }) => {
    return (
        <div className="product-card" style={{ padding: '20px' }}>
            <img src={image} alt={name} style={{ width: '150px', height: '150px' }} />
            <h3>{name}</h3>
            <p className="price">₹{price}</p>
            <p className="description">{description}</p>
            <button className="add-cart-btn">Add to Cart</button>

        </div>
    )
}
export default ProductCard;

