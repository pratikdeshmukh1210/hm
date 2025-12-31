import { useEffect, useState } from 'react'
import { axiosInstance } from '../config/axiosInstance'

const Women = () => {
    const [products,setProducts] = useState([]) ;
    console.log(products) ;

  const getAllProduct= async()=>{   

    try {
        
        
    let res = await axiosInstance.get("products/getall?category=WOMENS") ; // query routing -> backend uses /getall

     if(res){
        setProducts(res.data.products) ;
     }
        
    } catch (error) {
      console.log("error in pro apis", error?.response ?? error?.message ?? error)
    }} ;

    useEffect(()=>{
      getAllProduct() ;
    },[]) ;

    return(
  
    <div className='flex justify-center items-center gap-2.5 pt-5  '>
    
    { products?.map((elem) =>(
      <div 
          key={elem._id}  
          className='w-[280px] bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden border border-gray-200 '
        >
          {/* Image Container */}
          <div className='w-full h-[200px] bg-gray-300 overflow-hidden flex items-center justify-center'>
            {elem.images ? (
              <img 
                src={elem.images} 
                alt={elem.productName}
                className='w-full h-full object-cover hover:scale-105 transition-transform'
              />
            ) : (
              <span className='text-gray-500'>No Image</span>
            )}
          </div>
          
          {/* Content Container */}
          <div className='p-4'>
            <h2 className='text-xl font-bold text-gray-800 mb-2'>{elem.productName}</h2>
            
            <div className='mb-3'>
              <p className='text-gray-600 text-sm font-semibold'>Price</p>
              <p className='text-2xl font-bold text-green-600'>${elem.amount}</p>
            </div>
            
            <div>
              <p className='text-gray-600 text-sm font-semibold mb-1'>Colors Available</p>
              <p className='text-gray-700'>{elem.colors}</p>

            </div>
            <div className='bg-green-400 p-2 rounded-2xl flex justify-center items-center  hover:bg-amber-500'><button > ADD to cart</button>
             </div>
          </div>
        </div> 
    ))}
    
    </div>
  )
};

export default Women