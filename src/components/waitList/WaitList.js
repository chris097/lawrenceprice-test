const WaitList = () => {
  return(
    <>
      <form className="flex justify-center mt-10 whitespace-nowrap">
      <div className="">
        <input className="lg:w-553 w-full h-88 border border-primaryGray rounded-full outline-none pl-6 placeholder-primaryGray text-24 font-400 font-RatDisplay" type="email" placeholder="Your email Address" />
        <button className="h-72 lg:w-172 w-32 bg-primaryBlue text-white rounded-full lg:ml-5 ml-1" type="submit">Join Waitlist</button>
      </div>
      </form>
      <button className="whitespace-nowrap flex justify-center mx-auto mt-5 text-24 font-RatDisplay font-500 text-secondaryGray" type="button">I would prefer an SMS instead. </button>
    </>  
  )
};

export default WaitList;