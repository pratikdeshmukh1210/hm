import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router';
const PubliceRoute = () => {
 let {user} = useSelector((state) => state.auth) ;

 if( user ) 
  return <Navigate to ="/home" />

  return (
    <Outlet />
  )
}

export default PubliceRoute ;