import React, { useState } from 'react'

import Register from '../components/Register'
import Login from '../components/Login' 

const AuthLayout = () => {
   let [toggle , setToggle] = useState(true) ;
 
  return <div>{toggle ? <Login setToggle={setToggle} /> : <Register setToggle={setToggle} />}</div>;


};

export default AuthLayout