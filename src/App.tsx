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
} from "react-router-dom";

const Cartlist = lazy(()=>import('./modules/Cartlist'));

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Headercomp />),
    children:[
      {
        path:'/',
        element: <> <Productlist /> </>
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
  },
]);

function App() {
  return (
    <div className="App mx-auto px-10">
  <QueryClientProvider client={queryClient}>
      {/* <Headercomp /> */}
      <RouterProvider router={router} />
  </QueryClientProvider>  
    </div>
  );
}

export default App;