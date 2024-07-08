import location from '../icons/location.svg'
import email from '../icons/email.svg'
import phone from '../icons/phone.svg'
import fb from '../icons/facebook.svg'
import ig from '../icons/Instagram.svg'
import lk from '../icons/LinkedIn.svg'
import tw from '../icons/Twitter.svg'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div className='flex flex-col w-full items-center gap-10 mb-20 px-4 md:px-10 phone:mb-0' id='contactus'>
      <h1 className='text-3xl font-semibold text-center'>Contact Us</h1>
      <div className='flex flex-col md:flex-row justify-between w-[90vw] gap-20'>
        <div className='flex flex-col items-start gap-6 flex-[2] w-full md:w-auto'>
          <p className='text-2xl font-semibold text-center md:text-left '>Do you need help? Send us a message</p>
          <div className="flex flex-col items-start gap-2 w-full">
            <label>Full Name</label>
            <input type="text" className='w-full border border-[#343A40] rounded-xl px-4 py-[7px]' placeholder='John Doe' />
          </div>
          <div className="flex flex-col items-start gap-2 w-full">
            <label>Email</label>
            <input type="text" className='w-full border border-[#343A40] rounded-xl px-4 py-[7px]' placeholder='JohnDoe@gmail.com' />
          </div>
          <div className="flex flex-col items-start gap-2 w-full">
            <label>Message</label>
            <textarea cols="30" rows="10" className='w-full border border-[#343A40] rounded-xl px-4 py-[7px]' placeholder='Write your message here'></textarea>
          </div>
          <input type="submit" value="Send" className="w-full rounded-[6px] text-white bg-[#343A40] px-4 py-[7px]" />
        </div>
        <div className="flex-1 flex flex-col items-start gap-8 w-full md:w-auto">
          <div className="flex flex-row items-center gap-2">
            <img src={location} alt="" />
            <p className="text-base">13, Ashley Walters Street, Ikeja, <br /> Lagos, Nigeria</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <img src={phone} alt="" />
            <p className="text-base">+44 081-1236-4568</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <img src={email} alt="" />
            <p className="text-base">Info@CraftedCharm.com</p>
          </div>
          <div className='flex flex-row items-center gap-2'>
            <Link to=''><img src={fb} alt="Facebook" /></Link>
            <Link to=''><img src={ig} alt="Instagram" /></Link>
            <Link to=''><img src={lk} alt="LinkedIn" /></Link>
            <Link to=''><img src={tw} alt="Twitter" /></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
