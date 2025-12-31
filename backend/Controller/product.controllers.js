import { ProductModel } from "../Model/product.model.js";
import { UserModel } from "../Model/user.model.js";
import { uploadToImageKit } from "../services/storage.services.js";

// export const createProductController = async (req, res) => {
//   try {
//     const {
//       productName,
//       description,
//       amount,
//       currency,
//       category,
//       sizes,
//       colors,
//       images,
//     } = req.body;


//      if (!req.files)
//       return res.status(404).json({
//         message: "Images are required",
//       });

//     let imageUrls = await Promise.all(
//       req.files.map(
//         async (elem) => await uploadToImageKit(elem.buffer, elem.originalname)
//       )
//     );





//     if (
//       !productName ||
//       !description ||
//       !amount ||
//       !currency ||
//       !category ||
//       !sizes?.length ||
//       !colors?.length 
      
//     ) {
//       return res.status(400).json({
//         message: "All fields are required",
//       });
//     }

//     const newProduct = await ProductModel.create({
//       productName,
//       description,
//       amount,
//       currency,
//       category,
//       sizes,
//       colors,
//       images : imageUrls.map((elem) => elem.url), 
//       user_id: req.user._id,
//     });

//     const user = await UserModel.findById(req.user._id);
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     user.products.push(newProduct._id);
//     await user.save();

//     return res.status(201).json({
//       message: "Product created successfully",
//       product: newProduct,
//     });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({
//       message: "Internal server error",
//     });
//   }
// };

export const createProductController = async (req, res) => {
  try {
    
    let imageUrls = [];

    const {
      productName,
      description,
      amount,
      currency,
      category,
      sizes,
      images ,
      colors,
    } = req.body;

    
    if (!req.files)
      return res.status(404).json({
        message: "Images are required",
      });
      console.log("req.file",req.file) ;

    if (req.files && req.files.length > 0) {
      imageUrls = await Promise.all(
        req.files.map((file) =>
          uploadToImageKit(file.buffer, file.originalname) 
        )
      );
    }
    console.log("imgURL",imageUrls) ;

    if (
      !productName ||
      !description ||
      !amount ||
      !currency ||
      !category ||
      !sizes?.length ||
      !colors?.length
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newProduct = await ProductModel.create({
      productName,
      description,
      amount,
      currency,
      category,
      sizes,
      colors,
      images: imageUrls.map((img) => img.url),
      user_id: req.user._id,
    });

  const user = await UserModel.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.products.push(newProduct._id);
    await user.save();

    return res.status(201).json({
      message: "Product created successfully",
      product: newProduct,
    });

  } catch (error) {
    console.log("CREATE PRODUCT ERROR:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};


 export const getALlController = async(req,res)=>{

    try {
      console.log("")
        let cat = req.query.category ;
        let allProducts;
  console.log("cat =>  ",cat) ;
       
      allProducts = await ProductModel.find({
      category:cat ,
     }) ; 
     return res.status(200).json({
      message:"all product find" ,
      products: allProducts ,
     })

    } catch (error) {
      console.log("error in product ",error)
      return res.status(500).json({
        messsage:"Internal server error ",
        error ,
      })
       }
  }
