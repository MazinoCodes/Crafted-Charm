import search from '../icons/Search Icon.svg';
import shopping from '../icons/Shopping Icon.svg';
import heroimg1 from '../images/HeroImg1.svg';
import heroimg2 from '../images/Heroimg2.svg';
import heroimg3 from '../images/HeroImg3.svg';
import arrow from '../icons/Arrow.svg';
import leftArrow from '../icons/LeftArrow.svg';
import rightArrow from '../icons/RightArrow.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Navbar from '../Components/Navbar';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const heroimg = [heroimg1, heroimg2, heroimg3];

  const handleNextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % heroimg.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((currentImageIndex - 1 + heroimg.length) % heroimg.length);
  };

  return (
    <div className="flex flex-col w-full pt-4 justify-center mx-auto px-7 tablet:px-5 phone:px-5 " >
      <Navbar />
      <div className="flex flex-row justify-around items-center w-full mx-auto tablet:flex-col-reverse tablet:justify-center phone:flex-col-reverse phone:justify-center">
        <div className="flex flex-col items-start gap-8 flex-1 tablet:flex-1 tablet:w-full phone:flex-1 phone:w-full phone:gap-4">
          <p className="banner bg-[#343A40] text-[#F5F5F5] flex flex-row items-center gap-4 w-fit px-4 rounded-[20px] phone:text-sm phone:py-[5px] phone:gap-2">
            Craft your perfect home with our furniture <img src={arrow} alt="" />
          </p>
          <div className="flex flex-col gap-4 mb-[10px] flex-1 phone:gap-2">
            <h1 className="text-[45px] font-semibold tablet:text-[30px] phone:text-[25px]">
              Elevate your Space with Crafted Charm Furniture Designed for Timeless Elegance
            </h1>
            <p className="text-[#747373] text-xl tablet:text-lg phone:text-base">
              Explore our unique selection of handcrafted furniture made to add elegance and coziness to any space
            </p>
          </div>
          <a href='#ourproducts'>
            <button className="bg-[#343A40] text-[#F5F5F5] px-6 py-3 rounded-md tablet:px-4 tablet:py-2 phone:px-3 phone:py-2">
              Shop Now
            </button>
          </a>
        </div>
        <div className="flex flex-row items-center flex-2 justify-center tablet:flex-1 tablet:w-full phone:flex-1 phone:w-full">
          <button className="bg-[#343A4099] w-fit px-4 py-3 rounded-[48px] tablet:px-3 tablet:py-2 phone:px-2 phone:py-1" onClick={handlePrevImage}>
            <img src={leftArrow} alt="" />
          </button>
          <img className="w-full tablet:w-3/4 phone:w-3/4" src={heroimg[currentImageIndex]} alt="" />
          <button className="bg-[#343A40] w-fit px-4 py-3 rounded-[48px] tablet:px-3 tablet:py-2 phone:px-2 phone:py-1" onClick={handleNextImage}>
            <img src={rightArrow} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
