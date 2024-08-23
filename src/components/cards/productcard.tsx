import React,{useState,FC} from 'react'
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useDispatch,useSelector } from 'react-redux';
import { addToCart,removefromCart } from '../../redux/slicers/cartslice';


interface productcardProps{
    id:number,
    title:string,
    description:string,
    image:string,
    price:number,
}

const Productcard=({id,title,description,image,price}:productcardProps) => {

    const dispatch = useDispatch();

    const [clicked,setClicked] = useState(true);

    const truncateDescription = (description: string, wordLimit: number): string => {
        const words = description.split(' ');
        if (words.length > wordLimit) {
          return words.slice(0, wordLimit).join(' ') + '...';
        }
        return description;
      };  

    const handleCart =()=>{
      setClicked(!clicked);
      if(clicked) dispatch(addToCart({id, title, description, image, price}))
      else dispatch(removefromCart(id))
    }  

  return (
    <>
<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div className='relative'>
        <img className="rounded-t-lg w-full h-full object-cover mt-2" src={image} alt="" />

    <div className="absolute top-2 right-2 bg-gray-200 p-3  shadow-md hover:bg-gray-200" onClick={handleCart}>
       {!clicked ?  <FaHeart /> : <CiHeart />}
    </div>   
    
    </div>
    <div className="p-5">
            <h5 className="mb-1 text-md font-bold tracking-tight text-gray-900 dark:text-white text-left mx-2">{truncateDescription(title,4)}</h5>
        <p className="p-2 mb-3 font-normal text-gray-700 dark:text-gray-400 h-24 overflow-hidden text-left">{truncateDescription(description,15)}.</p>
        <p className='text-left mx-2 text-xl font-bold'>{price}$</p>
    </div>
    
</div>
    </>
  )
}

export default Productcard