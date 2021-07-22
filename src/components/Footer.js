import { ReactComponent as LogoIcon } from '../icons/logo-svg.svg';
import { ReactComponent as FacebookIcon } from '../icons/facebook-svg.svg';
import { ReactComponent as LinkdinIcon } from '../icons/linkdin-svg.svg';
import { ReactComponent as TwitterIcon } from '../icons/twitter-svg.svg';
import { ReactComponent as InstagramIcon } from '../icons/instagram-svg.svg';
import { ReactComponent as YoutubeIcon } from '../icons/youtube-svg.svg';
import { ReactComponent as NaijaIcon } from '../icons/naija-svg.svg';
import google1 from '../images/google.png';
import web1 from '../images/web.png';
import apple1 from '../images/apple1png.png';

const Footer = () => {
  return(
    <div className="lg:px-10 px-4 lg:text-left text-center">
      <div className="lg:flex lg:justify-between justify-center mt-24 items-center">
        <div className="flex lg:flex-none justify-center"><LogoIcon /></div>
        <div className="font-RatText text-18 font-500 lg:mt-0 mt-4">Lawrence Price & Company</div>
      </div>
      <div className="lg:flex justify-between lg:mt-24 mt-14 border-b pb-7 border-black items-center">
        <div>
          <div className="text-18 font-RatText font-500 mx-auto">Coming Soon On:</div>
          <div className="md:flex flex-wrap mt-4">
            <img className="mx-auto h-12" src={apple1} alt="apple_icon" />
            <img className="mx-auto h-12 lg:mr-1 lg:my-0 my-3" src={google1} alt="google_icon" />
            <img className="mx-auto h-12" src={web1} alt="web_icon" />
          </div>
        </div>
        <div className="">
          <div className="text-18 font-RatText font-500 lg:mt-0 mt-10">Follow Us on Social Media</div>
          <div className="flex mt-3 items-center mx-auto justify-center">
            <FacebookIcon className="mr-2" />
            <LinkdinIcon className="mr-2" />
            <InstagramIcon className="mr-2" />
            <TwitterIcon className="mr-2" />
            <YoutubeIcon className="mr-2" />
          </div>
        </div>
      </div>
      <div className="lg:flex block lg:justify-between justify-center mt-3 mb-10 text-18 font-RatText font-500">
        <div>Copyright © 2021 BBe App. All rights reserved.</div>
        <div className="flex items-center lg:mt-0 mt-6 justify-center"><span className="mr-2"><NaijaIcon /></span>Nigeria</div>
      </div>
    </div>
  )
}

export default Footer;