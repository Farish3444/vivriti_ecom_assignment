import React from 'react';
import { Outlet,useNavigate,Navigate } from 'react-router-dom';

const Protectedroute = ({element}:any) => {
 const token = sessionStorage.getItem('token');

 if(!token){
    return <Navigate to="/login" replace />;
 }

 return element;

}

export default Protectedroute