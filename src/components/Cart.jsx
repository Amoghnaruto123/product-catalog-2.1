import React from 'react';

function Cart({ items }) {
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const grandTotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="cart-items">
          {items.map((item, index) => (
            <li key={index} className="cart-item">
              <span className="item-name">{item.name}</span>
              <span className="item-price">Price: ${item.price.toFixed(2)}</span>
              <span className="item-quantity">Quantity: {item.quantity}</span>
              <span className="item-total">Total: ${(item.price * item.quantity).toFixed(2)}</span>
            </li>
          ))}
        </ul>
      )}
      <div className="cart-summary">
        <p>Total Items: {totalItems}</p>
        <p>Grand Total: ${grandTotal.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default Cart;