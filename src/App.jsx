import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';
import Product from './Pages/Product';
import Homepage from './Pages/Homepage';
import Payment from './Pages/Payment';
import FavoriteProductList from './Components/FavoriteProductList';
import Navbar from './Components/Navbar';
import axios from 'axios';

function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProducts = async (page) => {
      setLoading(true);
      setError('');
      try {
        const response = await axios.get('https://timbu-get-all-products.reavdev.workers.dev/', {
          params: {
            organization_id: process.env.REACT_APP_ORG_ID,
            reverse_sort: true,
            page: page,
            size: 30,
            Appid: process.env.REACT_APP_APP_ID,
            Apikey: process.env.REACT_APP_API_KEY,
          },
        });
        const products = response.data.items;

        const extraInfoData = await Promise.all(
          products.map(async (product) => {
            try {
              const response = await axios.get(
                `https://timbu-get-single-product.reavdev.workers.dev/${product.id}`, {
                  params: {
                    organization_id: process.env.REACT_APP_ORG_ID,
                    reverse_sort: true,
                    page: 1,
                    Appid: process.env.REACT_APP_APP_ID,
                    Apikey: process.env.REACT_APP_API_KEY,
                  }
                }
              );
              const data = response.data;
              const rating = data.extra_infos.find((info) => info.key === 'rate')?.value || 'N/A';
              const category = data.extra_infos.find((info) => info.key === 'category')?.value || 'N/A';
              return { ...product, rating, category };
            } catch (error) {
              console.error(`Failed to fetch extra info for product ${product.id}:`, error);
              return { ...product, rating: 'N/A', category: 'N/A' };
            }
          })
        );

        setProducts(extraInfoData);
      } catch (err) {
        setError('Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts(1);
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
        <Route path="/" exact element={
          <>
            {error && <h1>{error}</h1>}
            <Homepage products={products} addToCart={addToCart} />
          </>
        } />
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
      </Routes>
    )
  );
}

export default App;
