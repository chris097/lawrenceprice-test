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
    <div className="bg-white w-full h-114 shadow-primaryShadow flex justify-between border-2 lg:px-10 px-4 items-center cursor-pointer fixed z-40">
      <div><LogoIcon /></div>
      <div className="text-14 font-RatDisplay whitespace-nowrap font-500 lg:-ml-32 -ml-20">
        <span className="text-secondaryColor lg:mr-10 mr-3 ml-5 lg:ml-0">BBe</span>
        <span className="text-primaryGray">Join Waitlist</span>
      </div>
      <button onClick={onClickHandler} type="button" className="flex items-center invisible lg:visible absolute right-10">
        <span className="text-primaryColor text-13 font-SourceCode">Verified Access</span>
        <LogInIcon />
      </button>
      <div className="flex items-center">
        {menu === 'menu' && <button onClick={toggleMenu} className=" text-36 lg:invisible visible absolute right-6"><HiMenu /></button>}
       { menuClose === 'close' && <button onClick={toggleClose} className="text-24 text-primaryGray lg:hidden inline-block absolute right-6"><GrClose /></button>}
      </div>
      { drop === 'drop' && <div className="fixed right-0 top-32 -mt-4 shadow-sm inline-block lg:hidden bg-white w-48 h-14">
      <button type="button" onClick={onClickHandler} className="flex justify-center items-center">
      <span className="text-primaryColor text-13 font-SourceCode">Verified Access</span>
      <LogInIcon />
    </button>
      </div>}
    </div>
  )
}
