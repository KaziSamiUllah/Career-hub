import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home';
import Jobs from './Components/Jobs';
import Applied from './Components/Applied';
import Statistics from './Components/Statistics';
import Blogs from './Components/Blogs';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
 
children :
[
  {
    path:"/",
    element: <Home></Home>
  },
  {
    path:"/jobs",
    element: <Jobs></Jobs>
  },
  {
    path: "/applied",
    element: <Applied></Applied>
  },
  {
    path: "/statistics",
    element: <Statistics></Statistics>
  },
  {
    path: "/blogs",
    element: <Blogs></Blogs>
  }
]
},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
