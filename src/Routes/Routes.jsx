import {
    createBrowserRouter,

  } from "react-router-dom";
import AddAToy from "../Components/AddAToy/AddAToy";
import AllToys from "../Components/AllToys/AllToys";
import Blog from "../Components/Blog/Blog";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import GalleryComponent from "../Components/GalleryComponent/GalleryComponent";
import Home from "../Components/Home/Home";
import HomeBody from "../Components/HomeBody/HomeBody";
import Login from "../Components/Login/Login";
import MyToys from "../Components/MyToys/MyToys";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import Register from "../Components/Register/Register";
import Toydetails from "../Components/Toydetails/Toydetails";
import ToyDetail from "../Components/Toydetails/Toydetails";
import UpdateProduct from "../Components/UpdateProduct/UpdateProduct";




  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
          {
              path:'/',
              element:<HomeBody></HomeBody>
          },
          {
              path:'/register',
              element:<Register></Register>
          },
          {
            path:'/login',
            element:<Login></Login>
        },
        {
          path:'/addatoy',
          element:<PrivateRoute><AddAToy></AddAToy></PrivateRoute>


        },
        {
          path:'/alltoys',
          element:<AllToys></AllToys>
        },
        {
          path:'/mytoys',
          element:<PrivateRoute><MyToys></MyToys></PrivateRoute>
        }
        ,
        {
          path:'/toydetails/:id',
          element:<PrivateRoute><Toydetails></Toydetails></PrivateRoute>,
          loader:({params})=>fetch(`https://game-galaxy-server-ali-ashraf-abir.vercel.app/toydetails/${params.id}`)

        },
        {
          path:'/updateProduct',
          element:<PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>
        },
        {
          path:'/imagegallery',
          element:<GalleryComponent></GalleryComponent>
        },
        {
          path:'/blogs',
          element:<Blog></Blog>
        }
      ]

    },
  ]);

  export default router;