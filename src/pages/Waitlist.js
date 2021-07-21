import React, { useState } from 'react'
import { Header } from '../components/Header'
import { AccessLogin } from '../modal/AccessLogin';
import banner from '../images/banner1png.png';
import banner1 from '../images/banner.png';
import banner2 from '../images/banner2.png';
import image1 from '../images/image.png';
import image2 from '../images/image2.png';
import image3 from '../images/image3.png';
import image4 from '../images/image4.png';
import image5 from '../images/image5.png';
import apple1 from '../images/apple1png.png';
import { ReactComponent as CreamIcon } from '../icons/cream-svg.svg';
import { ReactComponent as GoogleIcon } from '../icons/google-svg.svg';
import { ReactComponent as WebIcon } from '../icons/web-svg.svg';
import { ReactComponent as LogoIcon } from '../icons/logo-svg.svg';
import { ReactComponent as FacebookIcon } from '../icons/facebook-svg.svg';
import { ReactComponent as NaijaIcon } from '../icons/naija-svg.svg';


export const Waitlist = () => {

  const [ loginUser, setLoginUser ] = useState('');
  const toggleUserLogin = () => setLoginUser((open) => !open);

  return (
    <div>
      { loginUser && <AccessLogin onClickHandler={toggleUserLogin} />}
      <Header onClickHandler={toggleUserLogin} />
      <div className="pt-44 relative mx-auto w-377 font-RatDisplay">
        <div className="text-64 font-500 leading-tight h-144 mx-auto">Grow above and beyond</div>
        <div className="font-400 text-18 font-RatDisplay h-72 mx-auto text-left mt-4">one platform to manage records, pay , Access grants, and run your business.</div>
      </div>
      <div className="px-10 mt-20">
        <div className="flex justify-center">
          <div className="w-617 h-616">
            <img src={banner} alt="young_lady" className="w-full h-full" />
          </div>
          <div className="w-595">
            <div className="h-308"><img className="w-ful h-full" src={banner2} alt="young_lady" /></div>
            <div className="h-349" style={{ marginTop: '-41px'}}><img className="w-ful h-full" src={banner1} alt="young_man" /></div>
          </div>
        </div>
        <div className="flex justify-center mt-20 text-center">
          <div className="font-RatDisplay">
            <div className="text-18 font-700 text-primaryBlack">FINANCIALS FOR BUSINESSES SMALL & LARGE</div>
            <div className="text-64 text-primaryBlack font-700">freedom begins here!</div>
            <div className="flex justify-center my-5">   
              <img src={image1} className=" bg-center bg-cover bg-no-repeat object-cover w-91 h-91" alt="" />
              <img src={image2} className=" bg-center bg-cover bg-no-repeat object-cover -ml-8 w-91 h-91" alt="" />
              <img src={image3} className=" bg-center bg-cover bg-no-repeat object-cover -ml-8 w-91 h-91" alt="" />
              <img src={image4} className=" bg-center bg-cover bg-no-repeat object-cover -ml-8 w-91 h-91" alt="" />
              <img src={image5} className=" bg-center bg-cover bg-no-repeat object-cover -ml-8 w-91 h-91" alt="" />
            </div>
            <div className="flex justify-center text-36 font-400 w-525 text-center mx-auto">Be amongst the First to Get the News When we Launch! <span className="-ml-20 mt-16"><CreamIcon /></span></div>
          </div>
        </div>
        <form className="flex justify-center mt-10">
          <div className="">
            <input className="w-553 h-88 border border-primaryGray rounded-full outline-none pl-6 placeholder-primaryGray text-24 font-400 font-RatDisplay" type="email" placeholder="Your email Address" />
            <button className="h-72 w-172 bg-primaryBlue text-white rounded-full ml-5" type="submit">Join Waitlist</button>
          </div>
        </form>
        <button className="flex justify-center mx-auto mt-5 text-24 font-RatDisplay font-500 text-secondaryGray" type="button">I would prefer an SMS instead. </button>
        <div className="flex justify-center mt-24">
          <div className="text-center">
            <div className="text-18 font-RatText font-500">Coming Soon On:</div>
            <div className="flex align-middle items-center mt-2">
              <GoogleIcon className="mt-3"  />
              <GoogleIcon className="mx-6 mt-3" />
              <WebIcon className="mt-5" />
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-24">
          <div><LogoIcon /></div>
          <div className="font-RatText text-18 font-500">Lawrence Price & Company</div>
        </div>
        <div className="flex justify-between mt-24 border-b pb-7 border-black">
          <div>
            <div>Coming Soon On:</div>
            <div className="flex mt-3">
              <img src={apple1} alt="" />
              <img src={apple1} alt="" />
              <img src={apple1} alt="" />
            </div>
          </div>
          <div className="">
            <div>Follow Us on Social Media</div>
            <div className="flex mt-3">
              <FacebookIcon className="mr-2" />
              <FacebookIcon className="mr-2" />
              <FacebookIcon className="mr-2" />
              <FacebookIcon className="mr-2" />
              <FacebookIcon className="mr-2" />
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-3 mb-10">
          <div>Copyright © 2021 BBe App. All rights reserved.</div>
          <div className="flex items-center"><span className="mr-2"><NaijaIcon /></span>Nigeria</div>
        </div>
      </div>
    </div>
  )
}

