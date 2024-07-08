import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Heart from '../icons/Heart.svg';
import shopping from '../icons/Shopping Icon.svg';
import HeartW from '../icons/HeartW.svg';
import shoppingW from '../icons/ShoppingW.svg';
import { useNavigate, useLocation } from 'react-router-dom';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);
  const navigate = useNavigate();
  const location = useLocation();
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

  const handleProductClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      document.getElementById('ourproducts')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/#ourproducts');
    }
  };
  const handleContactClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      document.getElementById('contactus')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/#contactus');
    }
  };
  return (
    <div className="nav">
      <div className="logo font-semibold text-xl tablet:text-xl phone:text-l">Crafted Charm</div>
      
      <nav className={`navbar body-font ${isOpen ? 'active' : ''}`}>
        <ul>
          <li className=' hover:text-[#343A40] hover:font-semibold'> <Link to="/" onClick={handleProductClick}>Home</Link></li>
          <li className="hover:text-[#343A40] hover:font-semibold">
          <Link to="/ourproducts" >Products</Link>
        </li>
          <li className=' hover:text-[#343A40] hover:font-semibold'> <Link to="/" onClick={handleContactClick}>Contact us</Link></li>
        </ul>
        <ul className="icons">
          {!isOpen && isDesktop ? (
            <>
              <li>
               <Link to='/favorites'><img src={Heart} alt="Wishlist"  /></Link> </li>
              <li><Link to="/cart"><img src={shopping} alt="Cart" /></Link></li>
            </>
          ) : (
            <>
              <li><span>Wishlist</span></li>
             
            </>
          )}
        </ul>
      </nav>
      <div className='flex flex-row items-center gap-5'>

     
      {!isDesktop && (
          <div className="mobile-cart-icon">
            <Link to="/cart"><img src={shopping} alt="Cart" className='w-[28px]' /></Link>
          </div>
        )}
      <div className="menu-icons">
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
