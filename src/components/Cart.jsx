import React from 'react';

function Cart({ cart, setCart }) {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const grandTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const removeItem = (itemToRemove) => {
    const newCart = cart.filter((item) => item.id !== itemToRemove.id);
    setCart(newCart);
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="cart-items">
          {cart.map((item, index) => (
            <li key={index} className="cart-item">
              <div className='item-details'>
                <span className="item-name">{item.name}</span>
                <span className="item-price">Price: ${item.price.toFixed(2)}</span>
                <span className="item-quantity">Quantity: {item.quantity}</span>
                <span className="item-total">Total: ${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              
              <button className='remove-button' onClick={() => removeItem(item)}>
                  Remove
                </button>
            </li>
          ))}
        </ul>
      )}
        {cart.length > 0 && (<div className="cart-summary">
          <p>Total Items: {totalItems}</p>
          <p>Grand Total: ${grandTotal.toFixed(2)}</p>
        </div>)}
    </div>
  );
}

export default Cart;