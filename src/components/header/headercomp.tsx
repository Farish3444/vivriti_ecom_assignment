import React, { useEffect,useState } from 'react'
// import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { FaShoppingBasket } from "react-icons/fa";
import { useDispatch,useSelector } from 'react-redux';
import { inputreducer } from '../../redux/slicers/listslice';
import { useNavigate,Outlet } from "react-router-dom";



const Headercomp = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [inputvalue,setInputvalue] = useState('')

  const cartnumber = useSelector((state:any)=>state.cart.cartitems);

  const handleInput =()=>{
    dispatch(inputreducer(inputvalue))
  }

  useEffect(()=>{
     handleInput();
  },[inputvalue]);

  return (
    <>
     
      <nav className="flex items-start justify-between p-4">
  
  <div className="flex items-center">
    <a href="#" className="text-3xl font-bold text-pink-600">
      MoBooM
    </a>
  </div>

   <div className="flex-grow h-14 relative">
    <input
      type="text"
      placeholder="Casual Sneakers"
      className="border border-gray-300 rounded-md px-4 py-2 w-[90%] focus:outline-none focus:ring-2 focus:ring-blue-500"
      value={inputvalue}
      onChange={e=>setInputvalue(e.target.value)}  
    />
    <button className="absolute inset-y-0 right-[8%] bottom-[20%] text-gray-500 focus:outline-none" onClick={()=>setInputvalue('')}>
      &#x2715;
    </button>
  </div>

  <div className="flex items-center space-x-8 text-gray-400 mt-2">
    <a  className="hover:text-black" onClick={()=>navigate('/')}>Store</a>
    <a  className="hover:text-black">Account</a>
    <a  className="hover:text-black">Wish List</a>
    <a  className="hover:text-black flex items-center" onClick={()=>navigate('/cart')}>
      Basket
      &nbsp;
      <FaShoppingBasket /> 
      <p className='rounded-md'>{cartnumber.length}</p>
    </a>
  </div>
</nav>

<br />

   

<div className="max-w-2xll bg-gradient-to-r from-gray-800 via-gray-600 to-red-500 text-white rounded-lg shadow-lg p-5">
  <h5 className="text-xl font-bold mb-2 text-left">Lorem Ipsum</h5>
  <p className="text-sm text-left">
    Slash Sales begins in June. Get up to 80% Discount on all products &nbsp;
    <a className="font-bold hover:underline">Read More</a>
  </p>
</div>

      <Outlet />
    </>
  )
}

export default Headercomp