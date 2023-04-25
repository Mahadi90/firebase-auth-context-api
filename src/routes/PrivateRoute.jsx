import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../components/provider/AuthProvider';

const PrivateRoute = ({children}) => {

   const {user, loading} = useContext(AuthContext)

   if(loading) {
    return <div className='mx-auto text-center mt-5'><div className="radial-progress text-primary" style={{"--value":70}}>70%</div></div>
   }
   else if(user){
    return children;
   }
   return <Navigate to='/login' replace={true}></Navigate>
};

export default PrivateRoute;