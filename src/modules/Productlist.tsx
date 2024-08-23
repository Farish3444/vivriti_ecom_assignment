import React,{useState,useEffect,useRef } from 'react';
import { useSelector, UseSelector } from 'react-redux';
import { QueryClient,QueryClientProvider,useQuery } from '@tanstack/react-query'; 
import axios from 'axios';
import Productcard from '../components/cards/productcard';
import { RootState } from '../redux/store';
import Config from '../config/api.json';

const queryClient = new QueryClient();


type RootStates = {
  list:string,
  searchquery:any,
}

const Productlist = () => {

    const [productdata,setproductdata] = useState([] as any[]);
    const [displaydrop,setdisplaydrop] = useState(false);
    const [selectedCategory,setSelectedCategory] = useState<string | null>(null);

    const dropdownRef = useRef<HTMLDivElement>(null);
    const inputvalue = useSelector((state:any)=>state.list.searchquery);
    
    const handleClickOutside = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setdisplaydrop(false);
      }
    };
  
    useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);
  
    const fetchProducts = async()=>{
        const response = await axios.get(Config.local_env);
        return response.data.products;
    }

    const fetchsearchproducts = async()=>{
      const response = await axios.get(`${Config.local_env}/search?q=${inputvalue}`);
      return response.data.products;
    }

    const { data, error, isLoading } = useQuery({
        queryKey: ['products',inputvalue],
        queryFn: inputvalue ? fetchsearchproducts : fetchProducts,
      });
    
      if (isLoading) return <div>Loading...</div>;
      if (error) return <div>Error: {error.message}</div>;  
      if (data.length == 0) return <h1 className='text-7xl'>No Results</h1>;

      const categories = Array.from(new Set(data?.map((m:any)=>m.category)));
      
      const filteredData = selectedCategory ? data.filter((m:any)=>m.category === selectedCategory) : data;
      
    return (
    <>
<div className='relative mt-2'>
<button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" 
className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-auto absolute left-0" type="button"
onClick={()=>setdisplaydrop(!displaydrop)}>
{selectedCategory ? selectedCategory : 'Select Category'}
<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
</svg>
</button>
</div>

{
  displaydrop && 
<div id="dropdown" className={`z-10 absolute my-10  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton" >
      <li
       className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
      onClick={()=>{
        setSelectedCategory(null)
        setdisplaydrop(false)
      }}
      >None below</li>
      {
          categories?.map((m:any,i:any)=>(
        <li key={i}>
        <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        onClick={()=>{
          setSelectedCategory(m);
          setdisplaydrop(false);
        }}
        >
          {m}
        </a>
      </li>
          ))  
      }
     
    </ul>
</div>
}


<div className="flex flex-wrap mx-0 my-8 mt-16">
      {
        filteredData?.map((m:any,i:any)=>(
          <div key={i} className="w-full sm:w-1/2 md:w-1/4 px-4 mb-6">
            <Productcard id={m.id} title={m.title} description={m.description} image={m.thumbnail} price={m.price}  />
          </div>
        ))
      }  
</div>
    </>
  )
}

export default Productlist