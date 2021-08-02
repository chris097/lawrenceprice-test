import React, { useState} from 'react';
import Banner from '../components/Banner';
import Header from '../components/header/ShopHeader';
import Footer from '../components/Footer';
import apple from '../images/apple.png';
import image1 from '../images/image.png';
import image2 from '../images/image2.png';
import image3 from '../images/image3.png';
import image4 from '../images/image4.png';
import image5 from '../images/image5.png';
import shopBanner from '../images/shop-banner.png';
import { ReactComponent as CreamIcon } from '../icons/cream-svg.svg';
import { ReactComponent as GoogleIcon } from '../icons/google-svg.svg';
import { ReactComponent as WebIcon } from '../icons/web-svg.svg';
import Cards from '../components/Cards';
import Card from '../modal/Card';


export const Shop = () => {

  const [ card, setCard ] = useState('')
  const [cardId, setCardId ] = useState('');

  const toggleCard = (id) => {
    setCardId(id)
    setCard((open) => !open)
  };

  return (
    <div>
      { card && <Card onClickHandler={toggleCard} id={cardId} />}
      <Header />
      <div className="flex justify-center text-center">
        <Banner 
        title='Shop With Freedom' 
        subTitle='Sell and Buy Products of your Choice'
        />
      </div>
      <div className="mt-20">
      <div className="w-full lg:px-10 px-4 ">
      <img src={shopBanner} className="lg:h-auto h-192 w-full" alt="" />
      </div>
      <Cards onClickHandler={toggleCard} />
      <div className="flex justify-center mt-20 text-center lg:px-10 px-4 ">
          <div className="font-RatDisplay">
            <div className="text-18 font-700 text-primaryBlack">SHOPPING MADE SUPER EASY</div>
            <div className="text-64 text-primaryBlack font-700">Shop with freedom</div>
            <div className="flex justify-center my-5">   
              <img src={image1} className=" bg-center bg-cover bg-no-repeat object-cover w-91 h-91" alt="" />
              <img src={image2} className=" bg-center bg-cover bg-no-repeat object-cover -ml-8 w-91 h-91" alt="" />
              <img src={image3} className=" bg-center bg-cover bg-no-repeat object-cover -ml-8 w-91 h-91" alt="" />
              <img src={image4} className=" bg-center bg-cover bg-no-repeat object-cover -ml-8 w-91 h-91" alt="" />
              <img src={image5} className=" bg-center bg-cover bg-no-repeat object-cover -ml-8 w-91 h-91" alt="" />
            </div>
            <div className="lg:flex justify-center text-36 font-400 text-center lg:w-519 mx-auto">Our App Is Is Beta And Coming Soon <span className="lg:absolute lg:ml-36 lg:mt-16 lg:flex-none flex justify-center"><CreamIcon /></span></div>
          </div>
        </div>
        <div className="flex justify-center mt-24 lg:px-10 px-4 ">
        <div className="text-center">
          <div className="text-18 font-RatText font-500">Coming Soon On:</div>
            <div className="md:flex flex-wrap align-middle items-center mt-2">
              <GoogleIcon className="mt-3"  />
              <img src={apple} className="lg:mx-3 mt-6"  alt="" />
              <WebIcon className="mt-5" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}
