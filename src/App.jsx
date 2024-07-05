import {Route, Routes} from 'react-router-dom'
import './App.css'
import './Pages/ProductModal.css'
import { useState } from 'react'
import Homepage from './Pages/Homepage'
import products from './Components/products';

//import Cart from './Pages/Cart'
//import Checkout from './Pages/Checkout'
//import Product from './Pages/Product'

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

  const removeFromCart = (productToRemove) => {
    const existingProduct = cart.find(item => item.id === productToRemove.id);
    if (existingProduct.quantity > 1) {
      setCart(cart.map(item =>
        item.id === productToRemove.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ));
    } else {
      setCart(cart.filter(item => item.id !== productToRemove.id));
    }
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
