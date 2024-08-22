import React,{useState,useEffect} from 'react';
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

    const inputvalue = useSelector((state:any)=>state.list.searchquery);
  
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

      
    return (
    <>
<div className="flex flex-wrap my-8">
      {
        data?.map((m:any,i:any)=>(
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