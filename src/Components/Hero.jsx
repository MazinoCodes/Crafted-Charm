import heroimg1 from '../images/HeroImg1.svg';
import heroimg2 from '../images/Heroimg2.svg';
import heroimg3 from '../images/HeroImg3.svg';
import arrow from '../icons/BlackArrow.svg';
import leftArrow from '../icons/LeftArrow.svg';
import rightArrow from '../icons/RightArrow.svg';
import { useState } from 'react';
import Navbar from './Navbar';
import line from '../icons/Line.svg'
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
    <div className="flex flex-col w-full pt-4 justify-center mx-auto px-7 tablet:px-5 phone:px-5  phone:gap-14 bg-[#F5F5F5] s " >
      <Navbar />
      <div className="flex flex-row justify-around items-center w-full mx-auto tablet:flex-col tablet:justify-center phone:flex-col phone:justify-center gaps">
        <div className="flex flex-col items-start gap-8 flex-1 tablet:flex-1 tablet:w-full phone:flex-1 phone:w-full phone:gap-4 tablet:items-center tablet:text-center phone:text-center phone:items-center">
          <p className="banner bg-white text-[#343A40] flex flex-row items-center gap-4 w-fit px-4 rounded-[20px] phone:text-sm phone:py-[5px] phone:gap-2">
            Craft your perfect home with our furniture <img src={arrow} alt="" />
          </p>
          <div className="flex flex-col gap-4 mb-[10px] flex-1 phone:gap-8 ">
            <h1 className="text-[45px] font-semibold tablet:text-[30px] phone:text-[30px] text-[#343A40] ">
              Elevate your Space with  Crafted Charm Furniture Designed for Timeless Elegance
            </h1>
            <p className="text-[#747373] text-xl tablet:text-lg phone:text-lg">
              Explore our unique selection of handcrafted furniture made to add elegance and coziness to any space
            </p>
          </div>
          <a href='#ourproducts'>
            <button className="bg-[#343A40] text-[#F5F5F5] px-6 py-3 rounded-md tablet:px-8 tablet:py-3 phone:px-8 phone:py-3">
              Shop Now
            </button>
          </a>
        </div>
        <div className="flex flex-row items-center flex-2 justify-center tablet:flex-1 tablet:w-full phone:flex-1 phone:w-full">
          <button className="bg-[#343A40] w-fit px-4 py-3 rounded-[48px] tablet:px-3 tablet:py-2 phone:px-2 phone:py-1" onClick={handlePrevImage}>
            <img src={leftArrow} alt="" />
          </button>
          <img className="w-full tablet:w-3/4 phone:w-3/4" src={heroimg[currentImageIndex]} alt="" />
          <button className="bg-[#343A40] w-fit px-4 py-3 rounded-[48px] tablet:px-3 tablet:py-2 phone:px-2 phone:py-1" onClick={handleNextImage}>
            <img src={rightArrow} alt="" />
          </button>
        </div>
      </div>
      <div className="w-fit bg-[white] flex flex-row justify-between items-center mx-auto gap-10 px-10 py-3 rounded-[10px] mb-20 phone:px-5 phone:gap-6 phone:w-[90vw]">
        <p className="flex flex-col items-center  "> 
            <span className='text-xl font-semibold phone:text-xl'>10k</span>
            <span className='text-base font-normal phone:text-base'>Customers</span>
        </p>
      <img src={line} alt="" />
        <p className="flex flex-col items-center   "> 
          <span className='text-xl font-semibold phone:text-xl'>20k</span>
          <span className='text-base font-normal phone:text-base'>Sold</span>
        </p>
        <img src={line} alt="" />

        <p className="flex flex-col items-center"> 
          <span className='text-xl font-semibold phone:text-xl'>300</span>
          <span className='text-base font-normal phone:text-base'>Outlets</span>
        </p>
      </div>
    </div>
  );
};

export default Hero;
