import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import products from './Components/products';
import Cart from './Pages/Cart'; // Ensure this is correctly imported
import Checkout from './Pages/Checkout';
import Product from './Pages/Product';
import Homepage from './Pages/Homepage';
import Payment from './Pages/Payment';
import FavoriteProductList from './Components/FavoriteProductList';

function App() {
  const [cart, setCart] = useState([]);

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

  return (
    <Routes>
      <Route path="/" exact element={<Homepage   products={products} addToCart={addToCart} />} />
      <Route path="/cart" exact element={<Cart cartItems={cart} removeFromCart={removeFromCart} addToCart={addToCart} removeItemFromCart={removeItemFromCart} />} /> 
      <Route path="/checkout" exact element={<Checkout cartItems={cart} />} />
      <Route path="/product/:id" element={<Product products={products} addToCart={addToCart} />} />
      <Route path="/payment" element={<Payment products={products} addToCart={addToCart} />} />
      <Route path="/favorites" exact element={<FavoriteProductList products={products} addToCart={addToCart} />} />

    </Routes>
  );
}

export default App;
