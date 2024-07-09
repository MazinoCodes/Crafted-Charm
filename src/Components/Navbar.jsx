import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Heart from '../icons/Heart.svg';
import shopping from '../icons/Shopping Icon.svg';
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

 
  return (
    <div className="nav ">
      <div className="logo font-semibold text-xl tablet:text-xl phone:text-l flex flex-row justify-between">
        <Link to='/'>Crafted Charm</Link></div>
      <div className="nav-links flex  flex-row justify-between items-center">
        <ul className="icons flex flex-row items-center gap-4">

               <li><Link to='/favorites'><img src={Heart} alt="Wishlist"  /></Link> </li>
              <li><Link to="/cart"><img src={shopping} alt="Cart" /></Link></li>
       

        </ul>
      <div className='flex flex-row items-center gap-5'>

     
   
        </div>
      </div>
    </div>
  );
};

export default Navbar;
