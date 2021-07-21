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
    <div className="px-10 ">
      <div className="flex justify-between mt-24 items-center">
        <div><LogoIcon /></div>
        <div className="font-RatText text-18 font-500">Lawrence Price & Company</div>
      </div>
      <div className="flex justify-between mt-24 border-b pb-7 border-black items-center">
        <div>
          <div className="text-18 font-RatText font-500">Coming Soon On:</div>
          <div className="flex mt-3">
            <img src={apple1} alt="apple_icon" />
            <img src={google1} className="mr-1" alt="google_icon" />
            <img src={web1} alt="web_icon" />
          </div>
        </div>
        <div className="">
          <div className="text-18 font-RatText font-500">Follow Us on Social Media</div>
          <div className="flex mt-3 items-center">
            <FacebookIcon className="mr-2" />
            <LinkdinIcon className="mr-2" />
            <InstagramIcon className="mr-2" />
            <TwitterIcon className="mr-2" />
            <YoutubeIcon className="mr-2" />
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-3 mb-10 text-18 font-RatText font-500">
        <div>Copyright © 2021 BBe App. All rights reserved.</div>
        <div className="flex items-center"><span className="mr-2"><NaijaIcon /></span>Nigeria</div>
      </div>
    </div>
  )
}

export default Footer;