import search from '../icons/Search Icon.svg'
import shopping from '../icons/Shopping Icon.svg'
const Hero = () => {
  return (
    <div className="flex flex-col w-[100vw] px-10 pt-3  h-[100vh]">
      <div className="flex flex-row justify-between items-center">
        <h1 className="font-semibold text-xl">Crafted Charm</h1>
        <div className="flex flex-row gap-4 text-[#747373]">
            <a href="" className="text-[#343A40]">Home</a>
            
            <a href="">Product</a>
            <a href="">Contact Us</a>
        </div>
        <div className="flex flex-row items-center gap-4">
          <img src={search} alt="" />
          <img src={shopping} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero
