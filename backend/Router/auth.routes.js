import express from "express" ;
import {registerController ,loginController,logoutController} from '../Controller/auth.controllers.js'

import { authMiddleware } from "../middlewares/auth.middlewares.js";


export const router = express.Router() ;

 router.get("/current-user", authMiddleware,async(req,res )=>{
    console.log("current user check ",req.user) ;
    return res.status(200).json({
     message:"Current user fetch" ,
     user:req.user ,
    }); 
 });

 router.post("/register",registerController );
 router.post("/login",loginController );
 router.post("/logout",logoutController );


