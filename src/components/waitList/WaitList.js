const WaitList = () => {
  return(
    <>
      <form className="flex justify-center mt-10">
      <div className="">
        <input className="w-553 h-88 border border-primaryGray rounded-full outline-none pl-6 placeholder-primaryGray text-24 font-400 font-RatDisplay" type="email" placeholder="Your email Address" />
        <button className="h-72 w-172 bg-primaryBlue text-white rounded-full ml-5" type="submit">Join Waitlist</button>
      </div>
      </form>
      <button className="flex justify-center mx-auto mt-5 text-24 font-RatDisplay font-500 text-secondaryGray" type="button">I would prefer an SMS instead. </button>
    </>  
  )
};

export default WaitList;