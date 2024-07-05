import { useState, useEffect } from 'react';
import './Navbar.css';
import search from '../icons/Search Icon.svg';
import shopping from '../icons/Shopping Icon.svg';
import searchW from '../icons/SearchW.svg';
import shoppingW from '../icons/ShoppingW.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const updateMedia = () => {
    setIsDesktop(window.innerWidth > 1024);
  };

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  return (
    <div className="nav">
      <div className="logo font-semibold text-xl tablet:text-xl phone:text-l">Crafted Charm</div>
      
      <nav className={`navbar body-font ${isOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="#" className="text-[#343A40] font-semibold">Home</a></li>
          <li><a href="#ourproducts">Product</a></li>
          <li><a href="#contactus">Contact Us</a></li>
        </ul>
        <ul className="icons">
          {!isOpen && isDesktop ? (
            <>
              <li><img src={search} alt="Search" /></li>
              <li><Link to="/cart"><img src={shopping} alt="Cart" /></Link></li>
            </>
          ) : (
            <>
              <li><img src={searchW} alt="Search" /><span>Search</span></li>
              <Link to="/cart" > <li><img src={shoppingW} alt="Cart" /><span>Cart</span></li></Link>
            </>
          )}
        </ul>
      </nav>
      
      <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;
