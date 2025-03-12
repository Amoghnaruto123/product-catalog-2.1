
import React from 'react';

const ProductCard = ({ id, name, price, description, image, addToCart }) => {
    const product = {
        id,
        name,
        price,
        description,
        image
    };

    return (
        <div className="product-card" style={{ padding: '20px' }}>
            <img src={image} alt={name} style={{ width: '150px', height: '150px' }} />
            <h3>{name}</h3>
            <p className="price">₹{price}</p>
            <p className="description">{description}</p>
            <button className="add-cart-btn" onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    )
}
export default ProductCard;

