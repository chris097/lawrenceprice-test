const Banner = ({title, subTitle, width, height, left}) => {
  return(
    <div className="pt-48 relative mx-auto font-RatDisplay" style={{ width }}>
        <div className="text-64 font-500 leading-tight mx-auto" style={{height}}>{title}</div>
        <div className="font-400 text-18 font-RatDisplay h-72 mx-auto mt-4" style={{left}}>{subTitle}</div>
    </div>
  )
}

export default Banner;