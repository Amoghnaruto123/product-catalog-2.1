import React from 'react';
function Cart({ cart, setCart }) {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
  const grandTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const removeItem = (itemToRemove) => {
    const newCart = cart.filter((item) => item.id !== itemToRemove.id)
    setCart(newCart)
  };

  const updateQuantity = (itemToUpdate, newQuantity) => {   
    if (newQuantity < 1) {
        removeItem(itemToUpdate)
        return
    }
    setCart(
      cart.map((item) =>
        item.id === itemToUpdate.id
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  }
  
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="cart-items">
          {cart.map((item, index) => (

            <li key={index} className="cart-item">
              <img src={item.image || '/placeholder.jpg'} alt={item.title} className="item-image" />
              <div className='item-details'>
                <span className="item-name">{item.title}</span>
                <span className="item-price">
                  Price: ${item.price?.toFixed(2)}
                </span>
                <div className="quantity-controls">
                  <button onClick={() => updateQuantity(item, item.quantity - 1)}>-</button>
                  <span className="item-quantity">
                    Quantity: {item?.quantity}
                  </span>
                  <button onClick={() => updateQuantity(item, item.quantity + 1)}>+</button>
                </div>
                <span className="item-total">
                  Total: ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
              <div className='remove-container' >
              <button className='remove-button' onClick={() => removeItem(item)}>
              <i className="fa-solid fa-trash"></i>
                </button>
                </div>  
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