import {Route, Routes} from 'react-router-dom'
import './App.css'
import './Pages/ProductModal.css'
import { useState } from 'react'
import Homepage from './Pages/Homepage'
//import Cart from './Pages/Cart'
//import Checkout from './Pages/Checkout'
//import Product from './Pages/Product'

function App() {
  const [products] = useState([
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
  ]);

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
  
  const removeFromCart = (productToRemove) => {
    const updatedCart = cart.filter(item => item.id !== productToRemove.id);
    setCart(updatedCart);
  };

  return (
    <Routes>
      <Route path="/" exact element={<Homepage products={products} addToCart={addToCart} />}></Route>
      {/*<Route path="/product/:id" element={<Product products={products} addToCart={addToCart} />}></Route>
      <Route path="/cart" element={<Cart cartItems={cart} removeFromCart={removeFromCart} />}></Route>
      <Route path="/checkout" element={ <Checkout cartItems={cart} />}></Route>*/}
    </Routes>
  )
}

export default App
