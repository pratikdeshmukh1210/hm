import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "../layout/AuthLayout";
import { axiosInstance } from "../config/axiosInstance";
import { useDispatch } from "react-redux";
import { setUser } from "../features/AuthSlice";
import HomeLayout from "../layout/homeLayout";
import PubliceRoute from "../components/PubliceRoute";
import MENS from "../page/Mens";
import Women from "../page/Women";
import Kids from "../page/Kids";
import CreateProduct from "../page/CreateProduct";

const AppRouter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        let res = await axiosInstance.get("auth/current-user", {
          withCredentials: true,
        });
        if (res) {
          dispatch(setUser(res.data.user));
          console.log(res);
        }
      } catch (error) {
        console.log("error in current user  api", error);
      }
    })();
  }, []);

  let router = createBrowserRouter([
    
    {
      path:"/",
      element:<PubliceRoute /> ,
      children:[
        {
          path:"",
          element:<AuthLayout/> ,
        } ,
  ],
    } ,
    {
      path:"/home",
      element:<HomeLayout /> ,
      children:[
        {
          path:"MENS",
          element:<MENS /> ,
        } ,
        {
          path:"Womens" ,
          element:< Women/>
        } ,
        {
          path:"Kids" ,
          element:<Kids />
        },
        {
  path:"CreteProduct" ,
  element:< CreateProduct/>
} ,

      ]
    } ,

  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;