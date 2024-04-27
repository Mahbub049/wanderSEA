import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import AuthProvider from './components/Providers/AuthProvider';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AddSpot from './components/AddSpot/AddSpot';
import AllSpots from './components/AllSpots/AllSpots';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import SpotDetails from './components/AllSpots/SpotCard/SpotDetails/SpotDetails';
import MyList from './components/MyList/MyList';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/addspot',
        element: <PrivateRoute><AddSpot></AddSpot></PrivateRoute>
      },
      {
        path: '/allspots',
        element: <AllSpots></AllSpots>,
        loader: ()=>fetch('http://localhost:5000/addspot')
      },
      {
        path: '/allspots/:id',
        element:<PrivateRoute><SpotDetails></SpotDetails></PrivateRoute>,
        loader: ({params})=>fetch(`http://localhost:5000/addspot/${params.id}`)
      },
      {
        path: '/mylist',
        element: <PrivateRoute><MyList></MyList></PrivateRoute>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
