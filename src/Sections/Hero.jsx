import search from '../icons/Search Icon.svg'
import shopping from '../icons/Shopping Icon.svg'
import drop from '../icons/DropDownHero.svg'
import heroimg1 from '../images/HeroImg1.svg'
import heroimg2 from '../images/Heroimg2.svg'
import heroimg3 from '../images/HeroImg3.svg'
import arrow from '../icons/Arrow.svg'
import leftArrow from '../icons/LeftArrow.svg'
import rightArrow from '../icons/RightArrow.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const heroimg = [heroimg1, heroimg2, heroimg3]
  const handleNextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % heroimg.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((currentImageIndex - 1 + heroimg.length) % heroimg.length);
  };
  return (
    <div className="flex flex-col w-[90vw] pt-8 justify-center ">
      <div className="flex flex-row justify-between items-center">
        <h1 className="font-semibold text-xl">Crafted Charm</h1>
        <div className="flex flex-row gap-4 text-[#747373] ">
            <a href="" className="text-[#343A40] font-semibold">Home</a>
            
            <a href="#ourproducts" className="flex flex-row gap-1 items-center">Product <img src={drop} alt="" /></a>
            <a href="">Contact Us</a>
        </div>
        <div className="flex flex-row items-center gap-4">
          <img src={search} alt="" />
         <Link to='/cart'><img src={shopping} alt="" /></Link> 
        </div>
      </div>
      <div className="flex flex-row justify-around items-center w-[100vw] pr-7">
        <div className="flex flex-col items-start gap-8 flex-1">
          <div className="">
          <p className="bg-[#343A40] text-[#F5F5F5] flex flex-row items-center gap-4 w-fit px-4 rounded-[20px] ">Craft your perfect home with our furniture <img src={arrow} alt="" /></p>
          </div>
         <div className="flex flex-col gap-4 mb-[10px]">
            <h1 className="text-5xl font-semibold">Elevate your Space with Crafted Charm Furniture Designed for Timeless Elegance</h1>
            <p className="text-[#747373] text-xl">Explore our unique selection of handcrafted furniture made to add elegance and coziness to any space</p>
         </div>
          
         <a href='#ourproducts'><button className="bg-[#343A40] text-[#F5F5F5] px-6 py-3     rounded-md">Shop Now</button></a> 
        </div>
        <div className="flex flex-row items-center flex-1 justify-center">
          <button className="bg-[#343A4099] px-4 py-3 rounded-[48px]" onClick={handlePrevImage}><img src={leftArrow} alt="" /></button>
          <img src={heroimg[currentImageIndex]} alt="" />
          <button className="bg-[#343A40] px-4 py-3 rounded-[48px] " onClick={handleNextImage}> <img src={rightArrow} alt=""  /></button>
        </div>
      </div>
    </div>
  )
}

export default Hero
