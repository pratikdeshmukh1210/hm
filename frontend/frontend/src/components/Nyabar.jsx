
import { NavLink,useNavigate } from 'react-router'
const Nyabar = () => {
  let navigator = useNavigate() ;
  return (
    <div className='flex justify-between items-center p-2'> 

<div className='w-15 h-15 '> <img src="https://imgs.search.brave.com/2YjxVHCuB8MhY9cXoyMW3Pd2b55pB0DtwlMWqZLTUU4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jbGVh/bmNsb3RoZXMub3Jn/L2ltYWdlLXJlcG9z/aXRvcnkvbGl2aW5n/d2FnZS1saXZpbmct/d2FnZS1pbWFnZXMt/aC1tLWxvZ28vQEBp/bWFnZXMvaW1hZ2Uu/anBlZw" alt="" /></div>
 <nav className='flex gap-10 text-xl font-semibold'> 
  <NavLink to="/home/womens">Women</NavLink>
  <NavLink to="/home/MENS">MENS</NavLink>
  <NavLink to="/home/Kids">Kids</NavLink>
</nav>
<button onClick={()=> navigator("/home/CreteProduct")}
 className='bg-blue-600 text-white cursor-pointer px-4 py-2  '> 
  Create
</button>
          
    </div>
  )
}

export default Nyabar