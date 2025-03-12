import React from 'react';
import Cart from '../components/Cart';

function CartPage({ cart, setCart }) {



  return (
    <div className="cart-page add-product-form-container">
      <Cart cart={cart} setCart={setCart} />
    </div>
  );
}

export default CartPage;