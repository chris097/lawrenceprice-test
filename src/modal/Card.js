import { ReactComponent as Cancel } from '../icons/cancel1-svg.svg';
import { ReactComponent as FruitIcon } from '../icons/fruit-svg.svg';
import { ReactComponent as CartIcon } from '../icons/cart-svg.svg';
import { useData } from 'data';
import Loading from '../components/loading/Loading';

const Card = ({onClickHandler, id }) => {

  const { data, isLoading } = useData(`photos/${id.id}`)

  return(
    <>
      <div className="bg-gray-700 opacity-30 fixed top-0 left-0 z-50 w-full h-full"></div>
      <div className="mx-auto flex justify-center">
        <div className="bg-white fixed rounded-20 shadow-primaryShadow lg:w-525 lg:h-757 w-full h-auto top-2 mx-auto z-50 pb-4">
          { isLoading ? <div className="flex justify-center mx-auto mt-52"><Loading />Uploading image...</div> : 
          <>
          <button onClick={onClickHandler}  className="flex justify-end absolute right-4 top-3" type="button"><Cancel className="flex justify-end items-end" /></button>
          <div><img src={data.url} className="w-full h-308 rounded-tl-20 rounded-tr-20" alt="card_image" /></div>
          <div className="px-10 mt-5">
            <div className="font-RatDisplay text-36 font-500 leading-tight">Fruit Basket</div>
            <div className="text-24 font-RatDisplay font-500 text-primaryColor">#2,500</div>
            <div className="lg:w-418 text-24 font-RatDisplay text-lightGray leading-8 mt-2">High Quality Palm & Almon Nuts, grown in the beautiful Planes of Jos Plateau.</div>
            <div className="text-13 flex mt-3"><span className="mr-1"><FruitIcon /></span> fruit.ng</div>
            <div className="flex justify-end">
              <div className="font-RatDisplay font-500 lg:text-24 text-18 whitespace-nowrap items-center flex mr-4 text-lightGray">Add to Cart <span className="ml-2"><CartIcon /></span></div>
              <button className="w-172 h-60 rounded-full bg-primaryBlue text-white text-24">Buy Now</button>
            </div>
          </div>
          </>
        }
        </div>
      </div>
    </>
  )
};

export default Card;