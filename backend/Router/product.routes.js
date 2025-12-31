import express from "express" ;
import{createProductController,getALlController} from "../Controller/product.controllers.js"
import { authMiddleware } from "../middlewares/auth.middlewares.js";


// multer api 
import { upload } from "../services/multer.js";

export const router = express.Router() ;
router.post("/create", authMiddleware, upload.array("images", 5), createProductController)


router.get("/getall",getALlController) ;
