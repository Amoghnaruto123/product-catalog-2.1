import React, { useState } from 'react';
import Cart from '../components/Cart';

function CartPage() {
  const [cartItems, setCartItems] = useState([
    { name: 'Product 1', price: 10.99, quantity: 2 },
    { name: 'Product 2', price: 25.50, quantity: 1 },
    { name: 'Product 3', price: 5.00, quantity: 4 },
  ]);

  return (
    <div className="cart-page">
      <Cart items={cartItems} />
    </div>
  );
}

export default CartPage;