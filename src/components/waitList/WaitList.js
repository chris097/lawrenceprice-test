import { useState } from "react";

const WaitList = () => {
  const [ mail, setMail ] = useState('mail');
  const [phone, setPhone ] = useState('');

  const toggleMail = () => {
    setPhone('phone')
    setMail('')
  }
  const togglePhone = () => {
    setMail('mail')
    setPhone('')
  }
  
  return(
    <>
      {
        mail === 'mail' && <div><form className="flex justify-center mt-10 whitespace-nowrap">
        <div className="">
          <input className="lg:w-553 w-240 lg:h-88 h-60 border border-primaryGray rounded-full outline-none pl-6 placeholder-primaryGray text-24 font-400 font-RatDisplay" type="email" placeholder="email Address" />
          <button className="lg:h-72 h-50 lg:w-172 w-110 bg-primaryBlue text-white rounded-full ml-2" type="submit">Join Waitlist</button>
        </div>
        </form>
        <button onClick={toggleMail} className="whitespace-nowrap flex justify-center mx-auto mt-5 text-24 font-RatDisplay font-500 text-secondaryGray" type="button">I would prefer an SMS instead. </button>
        </div>
      }
      {
        phone === 'phone' && <div>
        <button onClick={togglePhone} className="whitespace-nowrap flex justify-center mx-auto mt-5 text-24 font-RatDisplay font-500 text-secondaryGray" type="button">I think an e-mail will do.</button>
        <div>
        <form className="flex justify-center mt-10 whitespace-nowrap">
        <div className="">
          <span className="text-18 font-RatDisplay lg:mr-6">Phone Number</span>
          <input className="lg:w-553 w-167 lg:h-88 h-60 border border-primaryGray rounded-full outline-none pl-6 placeholder-primaryGray text-24 font-400 font-RatDisplay" type="email" placeholder="i.e  +234 0800 000 0000" />
          <button className="lg:h-72 h-40 lg:w-172 w-50 bg-primaryBlue text-white lg:rounded-full rounded-2xl ml-2" type="submit">Join Waitlist</button>
        </div>
        </form>
        </div>
        </div>
      }
    </>  
  )
};

export default WaitList;