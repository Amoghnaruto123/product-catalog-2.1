import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav>
        <div className="site-name">Better Buys</div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/add-product">Add Product</Link>
          <Link to="/cart" className="navbar-cart-btn">Cart</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="auth-links">
          <NavLink to="/signup" className="navbar-signup">Sign Up</NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;