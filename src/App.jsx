import { Routes, Route } from "react-router-dom";
import { useEffect, useState, } from "react";
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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch("https://fakestoreapi.com/products?limit=4");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        } else {
          const data = await response.json();
          const modifiedProducts = data.map((product) => {
            const trimmedDescription = product.description.split(" ").slice(0, 5).join(" ");
            const uniqueId = Math.random(); 
            return {
              
              old_id: product.id,
              id: uniqueId,
              ...product,
              description: trimmedDescription,
            };
          });
          setProducts(modifiedProducts);
        }
      } catch (err) {
        setError(err.message || "An unexpected error occurred.");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);
  const addNewProduct = (newProduct) => {
    setNewProducts([...newProducts, newProduct]);
    
  };

  const addToCart = (product) => {
    const productExists = cartItems.find((item) => item.old_id === product.old_id);
    const newProduct = {
        old_id : product.old_id,
        title: product.title,
        image: product.image,
        price: product.price,
        quantity: 1
    }
    if (productExists) {
        setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, newProduct]);
    }
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
            <Route path="/cart" element={<CartPage cart={cartItems} setCart={setCartItems}/>} />
            <Route
              path="/"
              element={
                location.pathname === "/" ? (
                  <div className="product-list">
                    {loading && <p>Loading products...</p>}
                    {error && <p>Error: {error}</p>}
                    {!loading && !error &&
                      [...newProducts, ...products].map((product) => (
                       <ProductCard
                          key={product.id}
                          name={product.title}
                          price={product.price}
                          image={product.image}
                          description={product.description}
                          addToCart={addToCart}

                        />
                      ))
                    }
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
;
