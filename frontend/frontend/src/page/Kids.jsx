import React from 'react'
import { axiosInstance } from '../config/axiosInstance';
import { useState } from 'react';
import { useEffect } from 'react';


const Kids = () => { 
 
  let [products,setProducts] = useState([]) ;
   const getallProduct=async()=>{
    try {
      
      let res = await axiosInstance.get("products/getall?category=KIDS") ;
      if(res){
        console.log("res is " ,res.data.products) ;
   setProducts(res.data.products) ;
      }
    } catch (error) {
      console.log("error" ,error) ;
    }
   }
useEffect(()=>{
  getallProduct() ;
},[])

return(
  <div className='w-full min-h-screen bg-gray-50 p-8'>
    <h1 className='text-4xl font-bold text-center mb-12 text-gray-800'>Kids Collection</h1>  
    
    <div className='flex flex-wrap gap-6 justify-center'>
      {products.map((elem)=>(
        <div 
          key={elem._id}  
          className='w-[280px] bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden border border-gray-200'
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
          </div>
        </div> 
      ))}
    </div>
  </div>
)
}

export default Kids