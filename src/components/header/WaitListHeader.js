import React from 'react';
import { ReactComponent as LogoIcon } from '../../icons/logo-svg.svg';
import { ReactComponent as LogInIcon } from '../../icons/login-svg.svg';

export const Header = ({onClickHandler}) => {
  return (
    <div className="bg-white w-full h-114 shadow-primaryShadow flex justify-between px-10 items-center cursor-pointer fixed z-40">
      <div><LogoIcon /></div>
      <div className="text-14 font-RatDisplay font-500">
        <span className="text-secondaryColor mr-10">BBe</span>
        <span className="text-primaryGray">Join Waitlist</span>
      </div>
      <div className="flex items-center">
        <span className="text-primaryColor text-13 font-SourceCode">Verified Access</span>
        <button onClick={onClickHandler} type="button"><LogInIcon /></button>
      </div>
    </div>
  )
}
