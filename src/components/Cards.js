import { ReactComponent as FruitIcon } from '../icons/fruit-svg.svg';
// Apis
import { useData } from 'data';
import Loading from '../components/loading/Loading';

const Cards = ({onClickHandler}) => {

  const {data, isLoading} = useData('photos');
  console.log(data)

  return(
    <div className="bg-secondaryBlue w-full h-auto pt-10 pb-16 lg:px-10 px-4 my-10 mx-auto">
      <div className="w-6/6 mx-auto">
      <div className="flex lg:ml-6 flex-wrap justify-center">
        {isLoading ? <div className="flex justify-center mx-auto"><Loading /> Loading...</div>
        :
          data?.map((card, index) => (
            <div key={index} onClick={() => onClickHandler(card)} className="lg:w-290 lg:h-317 w-full h-auto bg-white rounded-20 shadow-primaryShadow lg:mr-10 pb-2 mt-8">
           <img src={card.url} className="w-full h-192 rounded-tr-20 rounded-tl-20" alt="" />
          <div className="mx-6 mt-5 cursor-pointer">
            <div className="font-RatDisplay text-24 font-500 leading-tight">Fruit Basket</div>
            <div className="flex justify-between">
              <div className="text-18 font-RatDisplay font-500 text-primaryColor">#2,500</div>
              <div className="mt-5 text-13 flex"><span className="mr-1"><FruitIcon /></span> fruit.ng</div>
            </div>
          </div>
        </div>
          ))
        }
      </div>
      </div>
    </div>
  )
}

export default Cards;