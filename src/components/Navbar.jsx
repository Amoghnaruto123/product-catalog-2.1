import React from "react";
import { Link } from 'react-router-dom';

function Navbar() {
 

    return (
        <div>
            <nav>
                <div className="site-name">Better Buys</div>
                <div className="nav-container">
                    <div className="nav-links">
                        <Link to="/">Home</Link>
                        <Link to="/add-product">Add Product</Link>
                        <Link to="/cart">Cart</Link>
                        <Link to="/about">About</Link>
                        <Link to="/services">Services</Link>
                        <Link to="/contact">Contact</Link>
                    </div>
                    <div className="auth-links">
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Sign Up</Link>
                    </div>
                </div>
            </nav>
            </div>
    );
}
export default Navbar;