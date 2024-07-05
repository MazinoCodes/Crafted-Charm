import search from '../icons/Search Icon.svg'
import shopping from '../icons/Shopping Icon.svg'
import drop from '../icons/DropDownHero.svg'
import dropdown from '../icons/Dropdown icon.svg'
import heroimg from '../images/HeroImage.svg'
import arrow from '../icons/Arrow.svg'
import leftArrow from '../icons/LeftArrow.svg'
import rightArrow from '../icons/RightArrow.svg'
import couch from '../icons/Couch Icon.svg'
import tag from '../icons/Shopping tag icon.svg'
import home from '../icons/Home icon.svg'
const Hero = () => {
  return (
    <div className="flex flex-col w-[90vw] pt-8 justify-center ">
      <div className="flex flex-row justify-between items-center">
        <h1 className="font-semibold text-xl">Crafted Charm</h1>
        <div className="flex flex-row gap-4 text-[#747373] ">
            <a href="" className="text-[#343A40] font-semibold">Home</a>
            
            <a href="" className="flex flex-row gap-1 items-center">Product <img src={drop} alt="" /></a>
            <a href="">Contact Us</a>
        </div>
        <div className="flex flex-row items-center gap-4">
          <img src={search} alt="" />
          <img src={shopping} alt="" />
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
          
          <button className="bg-[#343A40] text-[#F5F5F5] px-4 py-3 rounded-md">Shop Now</button>
        </div>
        <div className="flex flex-row items-center flex-1 justify-center">
          <button className="bg-[#343A4099] px-4 py-3 rounded-[48px]"><img src={leftArrow} alt="" /></button>
          <img src={heroimg} alt="" />
          <button className="bg-[#343A40] px-4 py-3 rounded-[48px] "> <img src={rightArrow} alt="" /></button>
        </div>
      </div>
      <div className="w-fit bg-[white] flex flex-row justify-center items-center mx-auto gap-3 px-6 py-4 rounded-[20px]">
        <p className="flex flex-row items-center gap-2 pr-[11px] border-r-2"> <img src={home} alt="" /> Living Room <img src={dropdown} alt="" /></p>
        <p className="flex flex-row items-center gap-2"><img src={couch} alt="" /> Couch<img src={dropdown} alt="" /></p>
        <p className="flex flex-row items-center gap-2"> <img src={tag} alt="" /> $1000<img src={dropdown} alt="" /></p>
        <button className="bg-[#343A40] text-[#F5F5F5] py-3 px-2 rounded-[5px]">Search</button>
      </div>
    </div>
  )
}

export default Hero
