import React from 'react';
import {HiMenu} from 'react-icons/hi';
import {GrClose} from 'react-icons/gr';
import { ReactComponent as LogoIcon } from '../../icons/logo-svg.svg';
import { ReactComponent as LogInIcon } from '../../icons/login-svg.svg';
import { useState } from 'react';

export const Header = ({onClickHandler}) => {

  const [ menu, setMeun ] = useState('menu');
  const [ menuClose, setMeunClose ] = useState('');
  const [drop, setDrop ] = useState('')

  const toggleMenu = () => {
    setMeun('')
    setDrop('drop')
    setMeunClose('close')
  }

  const toggleClose = () => {
    setMeun('menu')
    setDrop('')
    setMeunClose('')
  }

  return (
    <div className="bg-white w-full h-114 shadow-primaryShadow flex justify-between lg:px-10 px-4 items-center cursor-pointer fixed z-40">
      <div><LogoIcon /></div>
      <div className="text-14 font-RatDisplay whitespace-nowrap font-500">
        <span className="text-secondaryColor lg:mr-10 mr-3 ml-5 lg:ml-0">BBe</span>
        <span className="text-primaryGray">Join Waitlist</span>
      </div>
      <div className="flex items-center">
        <span className="text-primaryColor text-13 font-SourceCode lg:visible invisible">Verified Access</span>
        <button className="invisible lg:visible" onClick={onClickHandler} type="button"><LogInIcon /></button>
      </div>
      <div className="flex items-center">
        {menu === 'menu' && <button onClick={toggleMenu} className=" text-36 lg:invisible visible absolute right-6"><HiMenu /></button>}
       { menuClose === 'close' && <button onClick={toggleClose} className="text-24 text-primaryGray lg:invisible visible absolute right-6"><GrClose /></button>}
      </div>
      { drop === 'drop' && <div className="fixed right-0 top-32 -mt-4 shadow-sm visible lg:invisible bg-white w-48 h-14">
      <div className="flex justify-center items-center">
      <span className="text-primaryColor text-13 font-SourceCode">Verified Access</span>
      <button onClick={onClickHandler} type="button"><LogInIcon /></button>
    </div>
      </div>}
    </div>
  )
}
