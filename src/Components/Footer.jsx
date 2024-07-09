import { Link } from 'react-router-dom'
import fb  from '../icons/facebook.svg'
import ig from '../icons/Instagram.svg'
import lk from '../icons/LinkedIn.svg'
import tw from '../icons/Twitter.svg'
const Footer = () => {
  return (
    <div className='bg-[#343A40] w-[100vw] flex flex-col items-center mt-24 pt-8 gap-10 '>
      <div className='flex flex-row items-start justify-around w-[100vw] text-white phone:flex-col phone:items-center  phone:gap-10'>
            <div className='flex flex-col gap-5 '>
                <div className='flex flex-col gap-3 phone:items-center'>
                <p className='text-2xl'>Crafted Charm</p>
                <p>Get free guides and updates from our team</p>
                </div>
               
              <p className='flex flex-row items-center'> 
                <input type="text" placeholder='Your@email.com' className='bg-[white] text-[#343A40] px-2 py-1 rounded-tl-[10px] rounded-bl-[10px] w-[22vw] phone:w-[70vw]'/>
                <button className='bg-[#F5F5F5] text-[#343A40] px-5 py-1 rounded-tr-[10px] rounded-br-[10px] margin'>Send</button></p> 
            </div>
            <div className='flex flex-row justify-between gap-10'>
                <div className='flex flex-col items-start gap-1'>
                    <h3 className='text-2xl'>Payment</h3>
                    <p>Paypal</p>
                    <p>Applepay</p>
                    <p>Credit/Debit</p>
                </div>
                <div>
                    <h3 className='text-2xl'>Useful Links</h3>
                    <div className='flex flex-col items-start gap-1'>
                        <a href='#ourproducts'>Home page</a>
                        <a href='#ourproducts'>Product page</a>
                        <Link to='/cart'>Cart</Link>
                        <a href='#contactus'>Contact Us</a>
                    </div>
                   
                </div>
            </div>
            <div className='flex flex-col items-center gap-2'>
                <h4 className='phone:text-xl'>Join Us</h4>
                <div className='flex flex-row items-center gap-2'>
                    <Link to=''><img src={fb} alt="" /></Link>
                    <Link to=''><img src={ig} alt="" /></Link>
                    <Link to=''><img src={lk} alt="" /></Link>
                    <Link to=''><img src={tw} alt="" /></Link>
                </div>
               
            </div>
      </div>
      <p className='text-[#AAABAD]'>© Crafted Charm, 2024</p>
    </div>
  )
}

export default Footer
