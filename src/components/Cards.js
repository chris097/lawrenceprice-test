import { ReactComponent as FruitIcon } from '../icons/fruit-svg.svg';
// Apis
import { useData } from 'data';
import Loading from '../components/loading/Loading';

const Cards = ({onClickHandler}) => {

  const {data, isLoading} = useData('photos');

  return(
    <div className="bg-secondaryBlue w-full h-auto pt-10 pb-16 lg:px-10 px-4 my-10">
      <div className="flex lg:ml-6 flex-wrap">
        {isLoading ? <div className="flex justify-center mx-auto"><Loading /> Loading...</div>
        :
          data?.map((card, index) => (
            <div key={index} onClick={() => onClickHandler(card)} className="lg:w-315 lg:h-317 w-full h-auto bg-white rounded-20 shadow-primaryShadow lg:mr-8 pb-2 mt-8">
           <img src={card.thumbnailUrl} className="w-full h-192 rounded-tr-20 rounded-tl-20" alt="" />
          <div className="mx-6 mt-3.5 cursor-pointer">
            <div className="font-RatDisplay lg:text-36 text-24 font-500 leading-tight">Fruit Basket</div>
            <div className="flex justify-between">
              <div className="text-24 font-RatDisplay font-500 text-primaryColor">#2,500</div>
              <div className="mt-5 text-13 flex"><span className="mr-1"><FruitIcon /></span> fruit.ng</div>
            </div>
          </div>
        </div>
          ))
        }
      </div>
    </div>
  )
}

export default Cards;