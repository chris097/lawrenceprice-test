import React from 'react';
import { ReactComponent as LogoIcon } from '../../icons/logo-svg.svg';
// import { ReactComponent as LogInIcon } from '../icons/login-svg.svg';

const Header = () => {
  return (
    <div className="bg-white w-full h-114 shadow-primaryShadow flex justify-between lg:px-10 px-4 items-center cursor-pointer fixed z-40">
      <div><LogoIcon /></div>
      <div className="text-14 font-RatDisplay font-500">
        <span className="text-secondaryColor mr-10">BBeShop</span>
        <span className="text-primaryGray">Our App</span>
      </div>
       <div className="flex items-center">
        <span className="text-primaryColor text-13 font-SourceCode"></span>
      </div>
    </div>
  )
}

export default Header;