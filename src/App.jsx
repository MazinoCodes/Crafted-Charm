import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';
import Product from './Pages/Product';
import Homepage from './Pages/Homepage';
import Payment from './Pages/Payment';
import FavoriteProductList from './Components/FavoriteProductList';
import ProductList from './Components/ProductList';
import Navbar from './Components/Navbar';

function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://api.timbu.cloud/products?organization_id=aff54f42cb464ae5adb9aec344de55fc&reverse_sort=false&page=1&Appid=2NWQH5W7FNE8ML5&Apikey=c55837c91c304d08876ffc9ba3ea484a20240712135232555921');
        const data = await response.json();
        setProducts(data.products); // Assuming the response structure
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = (product, quantity = 1) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
  };

  const removeFromCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct.quantity > 1) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ));
    } else {
      setCart(cart.filter(item => item.id !== product.id));
    }
  };

  const removeItemFromCart = (product) => {
    setCart(cart.filter(item => item.id !== product.id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    loading ? (
      <div>Loading...</div>
    ) : (
      <Routes>
        <Route path="/" exact element={<Homepage products={products} addToCart={addToCart} />} />
        <Route path="/cart" exact element={<Cart cartItems={cart} removeFromCart={removeFromCart} addToCart={addToCart} removeItemFromCart={removeItemFromCart} />} />
        <Route path="/checkout" exact element={<Checkout cartItems={cart} />} />
        <Route path="/product/:id" element={<Product products={products} addToCart={addToCart} />} />
        <Route path="/payment" element={<Payment clearCart={clearCart} />} />
        <Route path="/favorites" exact element={
          <div className='mt-4'>
            <Navbar />
            <FavoriteProductList products={products} addToCart={addToCart} />
          </div>
        } />
        <Route path="/ourproducts" exact element={
          <div className='mt-4'>
            <Navbar />
            <ProductList products={products} addToCart={addToCart} />
          </div>
        } />
      </Routes>
    )
  );
}

export default App;
