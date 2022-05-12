import React, { useEffect } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';
import ReactLoading from'react-loading';
import { obtenerDatosUsuario } from 'utils/api';
import { useUser } from 'context/userContext';

const PrivateRoute = ({children}) => {
    const {  isAuthenticated, isLoading,getAccessTokenSilently} = useAuth0();
    const {setUserData}=useUser();

    useEffect(()=>{

        const fetchAuth0Token=async()=>{
            //si se quieren hacer validaciones con el token:
            // if(localStorage.getItem('token')){
            //     //validar fecha de expiracion
            // }
            // else{
            //     //pedir token
            
                //1.PEDIR TOKEN A AUTH0
                const  accessToken= await getAccessTokenSilently({
                    audience: `api-autenticacion-concesionario-mintic`,
                });
                //2.Recibir token de auth0
                localStorage.setItem('token',accessToken);
                console.log(accessToken);
                //3.enviarle el token a el backend
                await obtenerDatosUsuario(
                    (response)=>{
                        console.log('response con datos del usuario',response);
                        setUserData(response.data);
                    },
                    (err)=>{
                        console.log('err',err);
                    }
                );
                
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