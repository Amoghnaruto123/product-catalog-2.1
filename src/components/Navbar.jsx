import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
function Navbar() {
  return (
    <div>
      <nav>
        <div className="site-name">Better Buys</div>

        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/add-product">Add Product</NavLink>
          <NavLink to="/cart" className="navbar-cart-btn">
            <FontAwesomeIcon icon={faCartShopping} style={{ fontSize: '25px' }}/>
          </NavLink>
          <NavLink to="/about">About</NavLink>
        </div>
        <div className="auth-links">
          <NavLink to="/signup" className="navbar-signup">Sign Up</NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;