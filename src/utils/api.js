import axios from 'axios';

//const baseURL ="http://localhost:5000"
const baseURL ="https://morning-taiga-76044.herokuapp.com"


const getToken=()=>{
  return `Bearer ${localStorage.getItem('token')}`;
}

export const obtenerVehiculos = async (sucessCallback,errorCallback) => {
  const options = { 
    method: 'GET', 
    url: `${baseURL}/vehiculos/`, 
  headers: {
    Authorization: getToken(),//3. enviarle el token a backend
  },

};
  await axios
    .request(options)
    .then(sucessCallback) .catch(errorCallback);
      
};

export const crearVehiculo=async(data,sucessCallback,errorCallback)=>{
  const options={
    method:'POST',
    url:`${baseURL}/vehiculos/`,
    headers:{'Content-Type':'application/json',Authorization: getToken()},
    data,
  };
  await axios.request(options).then(sucessCallback).catch(errorCallback);
}

export const editarVehiculo=async(id,data,sucessCallback,errorCallback)=>{
  const options={
    
      method: 'PATCH',
      url: `${baseURL}/vehiculos/${id}/`,
      headers: { 'Content-Type': 'application/json',Authorization:getToken() },
      data,
    };
    await axios.request(options).then(sucessCallback).catch(errorCallback);
  };
  

export const eliminarVehiculo=async(id,sucessCallback,errorCallback)=>{
  const options={
    method: 'DELETE',
    url: `${baseURL}/vehiculos/${id}/`,
    headers: { 'Content-Type': 'application/json',Authorization: getToken() },
    
  }
  await axios.request(options).then(sucessCallback).catch(errorCallback);
};

//CRUD PARA USUARIOS

export const obtenerUsuarios=async(sucessCallback,errorCallback)=>{
  const options={method:'GET',
  url:`${baseURL}/usuarios/`,
  headers:{
  Authorization: getToken(),
  }
};
  await axios.request(options).then(sucessCallback).catch(errorCallback);
};

export const obtenerDatosUsuario=async(sucessCallback,errorCallback)=>{
  const options={method:'GET',
  url:`${baseURL}/usuarios/self/`,
  headers:{
  Authorization: getToken(),
  }
};
  await axios.request(options).then(sucessCallback).catch(errorCallback);
};

export const editarUsuario=async(id,data,sucessCallback,errorCallback)=>{
  const options={
    
      method: 'PATCH',
      url: `${baseURL}/usuarios/${id}/`,
      headers: { 'Content-Type': 'application/json',Authorization:getToken() },
      data,
    };
    await axios.request(options).then(sucessCallback).catch(errorCallback);
  };

//CRUD DE VENTAS
export const crearVenta=async(data,sucessCallback,errorCallback)=>{
  const options={
    method:'POST',
    url:`${baseURL}/ventas/`,
    headers:{'Content-Type':'application/json',Authorization: getToken()},
    data,
    };
  await axios.request(options).then(sucessCallback).catch(errorCallback);
};


