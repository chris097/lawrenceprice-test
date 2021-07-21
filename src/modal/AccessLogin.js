import React from 'react';
import { ReactComponent as Cancel } from '../icons/cancel-svg.svg';
import {ReactComponent as TickIcon } from '../icons/tickok-svg.svg';

export const AccessLogin = ({onClickHandler}) => {
  return (
    <>
      <div className="bg-gray-700 opacity-30 fixed top-0 left-0 z-50 w-full h-full"></div>
      <div className="">
        <div className="fixed top-10 right-7 w-595 h-500 rounded-20 z-50 shadow-secondaryShadow bg-white px-4 pt-5">
          <button onClick={onClickHandler}  className="float-right" type="button"><Cancel /></button>
          <div className="flex justify-between px-5 mt-7 items-center">
            <div className="text-36 font-RatDisplay font-500">Private Access</div>
            <div className="text-primaryColor font-SourceCode text-13 mr-5 flex">VERIFIED ACCESS <span className="items-center flex ml-0.5"><TickIcon /></span></div>
          </div>
          <form className="mt-10 px-7 font-RatDisplay">
            <div>
              <input type="text" className="w-full h-67 border border-secondaryGray rounded-full focus:outline-none pl-4 placeholder-black" placeholder="Username" />
            </div>
            <div className="w-full h-67 border border-secondaryGray rounded-full focus:outline-none px-4 flex items-center mt-8">
              <input type="password" className="w-full outline-none placeholder-black" placeholder="Password" />
              <button className="whitespace-nowrap text-14 font-RatDisplay font-500">Show me</button>
            </div>
            <button type="submit" className="h-60 w-167 bg-secondaryColor rounded-full text-white mt-8">Access</button>
            <p className="font-RatDisplay font-400 text-8 px-3 text-secondaryGray mt-8">Verified Access: Only Verified User is allowed to access Blackbox Website via this login. User profiles are created based on unique request. NOTE: Your Access to the Blackbox website might and can be limited at any point in time.</p>
          </form>
        </div>
      </div>
    </>
  )
}
