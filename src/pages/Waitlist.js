import React, { useState } from 'react'
import { Header } from '../components/header/WaitListHeader'
import { AccessLogin } from '../modal/AccessLogin';
import banner from '../images/banner1png.png';
import banner1 from '../images/banner.png';
import banner2 from '../images/banner2.png';
import image1 from '../images/image.png';
import image2 from '../images/image2.png';
import image3 from '../images/image3.png';
import image4 from '../images/image4.png';
import image5 from '../images/image5.png';
import apple from '../images/apple.png';
import { ReactComponent as CreamIcon } from '../icons/cream-svg.svg';
import { ReactComponent as GoogleIcon } from '../icons/google-svg.svg';
import { ReactComponent as WebIcon } from '../icons/web-svg.svg';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import WaitList from '../components/waitList/WaitList';


export const Waitlist = () => {

  const [ loginUser, setLoginUser ] = useState('');
  const toggleUserLogin = () => setLoginUser((open) => !open);

  return (
    <div>
      { loginUser && <AccessLogin onClickHandler={toggleUserLogin} />}
      <Header onClickHandler={toggleUserLogin} />
      <Banner 
      width='377px'
      height= '144px'
      left= 'text-left'
      title='Grow above and beyond' 
      subTitle='one platform to manage records, pay , Access grants, and run your business.'
      />
      <div className="lg:px-10 px-4 mt-20">
        <div className="flex justify-center">
          <div className="lg:w-617 w-full h-616">
            <img src={banner} alt="young_lady" className="w-full h-full" />
          </div>
          <div className="lg:w-595 w-full">
            <div className="h-308"><img className="w-ful h-full" src={banner2} alt="young_lady" /></div>
            <div className="h-349" style={{ marginTop: '-41px'}}><img className="w-full h-full" src={banner1} alt="young_man" /></div>
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
            <div className="flex justify-center text-36 font-400 lg:w-525 w-full text-center mx-auto">Be amongst the First to Get the News When we Launch! <span className="-ml-20 mt-16"><CreamIcon /></span></div>
          </div>
        </div>
        <WaitList />
        <div className="flex justify-center mt-24">
          <div className="text-center">
            <div className="text-18 font-RatText font-500">Coming Soon On:</div>
            <div className="md:flex flex-wrap align-middle items-center mt-2">
              <GoogleIcon className="mt-3"  />
              <img src={apple} className="lg:mx-3 mt-6"  alt="" />
              <WebIcon className="mt-5" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

