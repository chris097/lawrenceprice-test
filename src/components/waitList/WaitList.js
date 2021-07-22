const WaitList = () => {
  return(
    <>
      <form className="flex justify-center mt-10 whitespace-nowrap">
      <div className="">
        <input className="lg:w-553 w-200 lg:h-88 h-60 border border-primaryGray rounded-full outline-none pl-6 placeholder-primaryGray text-24 font-400 font-RatDisplay" type="email" placeholder="Your email Address" />
        <button className="lg:h-72 h-50 lg:w-172 w-91 bg-primaryBlue text-white rounded-full ml-5" type="submit">Join Waitlist</button>
      </div>
      </form>
      <button className="whitespace-nowrap flex justify-center mx-auto mt-5 text-24 font-RatDisplay font-500 text-secondaryGray" type="button">I would prefer an SMS instead. </button>
    </>  
  )
};

export default WaitList;