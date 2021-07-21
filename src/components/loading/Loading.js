import ClipLoader from "react-spinners/ClipLoader";

export default function Loading({size = 30}){
  return <ClipLoader size={size} Loading={true} color='#FF0000' />
}