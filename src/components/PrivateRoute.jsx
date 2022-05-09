import React, { useEffect } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {  isAuthenticated, isLoading,getAccessTokenSilently} = useAuth0();

    useEffect(()=>{

        const fetchAuth0Token=async()=>{
            //si se quieren hacer validaciones con el token:
            // if(localStorage.getItem('token')){
            //     //validar fecha de expiracion
            // }
            // else{
            //     //pedir token
            
                const  accessToken= await getAccessTokenSilently({
                    audience: `api-autenticacion-concesionario-mintic`,
                });
                localStorage.setItem('token',accessToken);
            };
        
        if(isAuthenticated){
            fetchAuth0Token();
        }
    },[isAuthenticated,getAccessTokenSilently]);

    if (isLoading) return <div>Loading...</div>;
    

    return isAuthenticated? (
    <>{children}</>
    ):(
    <div>
    <div className='text-9xl text-red-500'>No estas autorizado para ver este sitio.</div>
    <Link to='/'>
        <span className='text-blue-500 font-bold'>
        Llevame al home
        </span>
    </Link>
    </div>
    );
};

export default PrivateRoute;