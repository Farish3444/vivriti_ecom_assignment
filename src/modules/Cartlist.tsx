import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removefromCart } from '../redux/slicers/cartslice';


interface cartlistProps{
  id:number,
  title:string,
  description:string,
  image:string,
  price:number,
  clicked:boolean
}

const Cartlist = () => {

    const cartSelector = useSelector((state:any)=>state.cart.cartitems);
    const dispatch = useDispatch();

    const handleRemove =(removeid:any)=>{
      dispatch(removefromCart(removeid))
    }

    if(cartSelector.length == 0) return <h1 className='text-7xl'>No Items in Cart</h1>;

    return (
    <>
     <div className="container mx-auto mt-2 mb-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cartSelector?.map((item: any) => (
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-4">
          <div className='relative'>
              <img className="rounded-t-lg w-full h-full object-cover mt-2" src={item.image} alt="" />
          </div>
          <div className="p-5">
                  <h5 className="mb-1 text-md font-bold tracking-tight text-gray-900 dark:text-white text-left mx-2">{item.title}</h5>
              <p className="p-2 mb-3 font-normal text-gray-700 dark:text-gray-400 h-24 overflow-hidden text-left">{item.description}.</p>
              <p className='text-left mx-2 text-xl font-bold'>{item.price}$</p>
          </div>
          <button onClick={()=>handleRemove(item.id)}  className='bg-red-500 p-3 rounded-md text-white text-md'>
            Remove</button>
      </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default Cartlist