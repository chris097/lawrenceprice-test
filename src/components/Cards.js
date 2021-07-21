import { ReactComponent as FruitIcon } from '../icons/fruit-svg.svg';
// Apis
import { useData } from 'data';
import Loading from '../components/loading/Loading';

const Cards = ({onClickHandler}) => {

  const {data, isLoading} = useData('photos');

  return(
    <div className="bg-secondaryBlue w-full h-auto pt-10 pb-16 px-10 my-10">
      <div className="flex ml-6 flex-wrap">
        {isLoading ? <div className="flex justify-center mx-auto"><Loading /> Loading...</div>
        :
          data?.map((card, index) => (
            <div key={index} onClick={() => onClickHandler(card)} className="w-315 h-317 bg-white rounded-20 shadow-primaryShadow mr-8 mt-8">
           <img src={card.thumbnailUrl} className="w-full h-192 rounded-tr-20 rounded-tl-20" alt="" />
          <div className="mx-6 mt-3.5 cursor-pointer">
            <div className="font-RatDisplay text-36 font-500 leading-tight">Fruit Basket</div>
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