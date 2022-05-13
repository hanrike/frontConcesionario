import { useUser } from 'context/userContext';
import React from 'react'

const PrivateRoute = ({roleList,children}) => {
    const {userData}=useUser();

   // console.log('user data en el private component',userData);
    if (roleList.includes(userData.rol)){
        return children;
    }
  return <div className='text-9xl text-red-500'>No estas autorizado para ver este sitio.</div>;
};


export default PrivateRoute;