import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";
import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddProductPage from "./pages/AddProductPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  const [newProducts, setNewProducts] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=4")
      .then((res) => res.json())
      .then((json) => {
        const modifiedProducts = json.map((product) => {
          const descriptionWords = product.description.split(" ");
          const trimmedDescription = descriptionWords.slice(0, 5).join(" ");
          return {
            ...product,
            description: trimmedDescription,
          };
        });
        setProducts(modifiedProducts);
      });
  }, []);
  const addNewProduct = (newProduct) => {
    setNewProducts([...newProducts, newProduct]);
  };

  const location = useLocation();

  return (
    <div className="main-content">
      <div className="app-container">
        <Navbar />

        <Routes>
          <Route
            path="/add-product"
            element={<AddProductPage addNewProduct={addNewProduct} />}
          />
           <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
           <Route path="/cart" element={<CartPage />} />
          <Route
            path="/"
            element={location.pathname === "/" ? (
                <div className="product-list">
                  {[...newProducts, ...products].map((product) => (

                    <ProductCard
                      key={product.id}
                      name={product.title}
                      price={product.price}
                      description={product.description}
                    />
                  ))}
                </div>
            ) : (
                <div></div>
            )
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
