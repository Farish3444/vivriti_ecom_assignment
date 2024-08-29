import React,{ useState,useEffect, useCallback } from 'react';
import Logo from '../../R.png';
import axios from 'axios';
import Config from '../../config/api.json';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const notify = (e:any) => toast.success(e);

const Login = () => {

    const [inputvalue,setinputvalue] =useState({username:"",password:""});
    const [errorstate,seterrorstate] = useState(false);
    const [errormsg,seterrormsg] = useState("");
    const [loading, setLoading] = useState(false); 
    const [apicall,setapicall] = useState(false);   
    const navigate = useNavigate();
    
    const handleLogin =async()=>{
      setLoading(true)
      try{
      await axios.post(`${Config.local_env}/auth/login`,{
        username:inputvalue.username,
        password:inputvalue.password,
        expiresInMins:1
      }).then((res)=>{
        seterrorstate(false)
        if(res.status == 200){
          sessionStorage.setItem("token",res.data.token)
          notify(`Welcome ${res.data.username}`)
          navigate('/productlist')
        }
      }).catch((er)=>{
        console.log(er)
        seterrorstate(true)
        seterrormsg(er.response.data.message)
      })
    } catch(er){
      console.log(er);
    }finally{
      setLoading(false);
    }

    }


    
    const handleSubmit=(e:any)=>{
      e.preventDefault();
     if(inputvalue.username && inputvalue.password){
          handleLogin();
     }else if(!inputvalue.username || !inputvalue.password){
      seterrorstate(true);
      seterrormsg("Enter Details to login")
     }
    }


    useCallback(()=>{
        handleLogin();
    },[apicall])



    const errorclass ="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"

    const normalclass="rounded-md rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

  return (
    <>
<div className="flex justify-center items-center min-h-screen ">
  <div className="w-80">
    <img src={Logo} alt='logo incoming' className='h-auto max-w-20 relative left-24 bottom-10' />

<form onSubmit={handleSubmit}>
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Your Email</label>
    <div className="relative mb-6">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
        </svg>
      </div>
      <input type="text" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com"
      value={inputvalue.username}
      onChange={e =>setinputvalue({...inputvalue,username:e.target.value})}
      />
    </div>
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Password</label>
    <div className="flex">
      <input type="text" id="website-admin"     
      className={errorstate ? errorclass : normalclass}  
      //  className="rounded-md rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
      placeholder="password"
      value={inputvalue.password}
      onChange={e =>setinputvalue({...inputvalue,password:e.target.value})}
      />
    </div>
     { errorstate && <p className="mt-2 text-sm text-red-600 dark:text-red-500 text-left"><span className="font-medium">Oh, snapp! &nbsp;</span>{errormsg}.</p> }
 
    
    <button type="submit" className="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    { !loading ?
    'Submit' : <div className="flex items-center">  
    <div  
      className="h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"  
      role="status">  
    </div>  
    <span className="ml-2 text-surface dark:text-white">Loading...</span>  
  </div>
    }
    </button>

    </form>

  </div>
</div>


    </>
  )
}

export default Login