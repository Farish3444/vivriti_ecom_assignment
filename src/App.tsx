import React, { lazy,Suspense } from 'react';
import './App.css';
import Headercomp from './components/header/headercomp';
import Productlist from './modules/Productlist';
import { QueryClient,QueryClientProvider,useQuery } from '@tanstack/react-query';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Navigate
} from "react-router-dom";
import Footer from './components/footer/footer';
import toast, { Toaster } from 'react-hot-toast';
import Protectedroute from './components/route/protectedroute';
const Cartlist = lazy(()=>import('./modules/Cartlist'));
const Login = lazy(()=>import('./modules/login/login'));

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path:'/login',
    element:<Login />
  },
  {
    path: "/",
    element: (<Headercomp />),
    children:[
      {
        path: "/",
        element: <Navigate to="/login" replace />,
      },
      {
        path:'/productlist',
        element: <> 
       <Protectedroute element={<Productlist />} />
         </>
      },
      {
        path: "cart",
        element: <>
        <Suspense fallback={<h1>...Loading Cart items</h1>}>
            <Cartlist />
        </Suspense>
        </>,
      },
    ]
  }
]);

function App() {
  return (
    <>
    <Toaster />
  <QueryClientProvider client={queryClient}>
      
    <div className="App px-10">
      <RouterProvider router={router} />
    </div>
    <Footer />
      
  </QueryClientProvider>  
    </>
  );
}

export default App;