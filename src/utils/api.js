import axios from 'axios';

const getToken=()=>{
  return `Bearer ${localStorage.getItem('token')}`;
}

export const obtenerVehiculos = async (sucessCallback,errorCallback) => {
  const options = { method: 'GET', url: 'http://localhost:5000/vehiculos/', 
  headers: {
    Authorization: getToken(),
  },

};
  await axios
    .request(options)
    .then(sucessCallback) .catch(errorCallback);
      
};

export const crearVehiculo=async(data,sucessCallback,errorCallback)=>{
  const options={
    method:'POST',
    url:'http://localhost:5000/vehiculos/',
    headers:{'Content-Type':'application/json',Authorization: getToken()},
    data,
  };
  await axios.request(options).then(sucessCallback).catch(errorCallback);
}

export const editarVehiculo=async(id,data,sucessCallback,errorCallback)=>{
  const options={
    
      method: 'PATCH',
      url: `http://localhost:5000/vehiculos/${id}/`,
      headers: { 'Content-Type': 'application/json',Authorization:getToken() },
      data,
    };
    await axios.request(options).then(sucessCallback).catch(errorCallback);
  };
  

export const eliminarVehiculo=async(id,sucessCallback,errorCallback)=>{
  const options={
    method: 'DELETE',
    url: `http://localhost:5000/vehiculos/${id}/`,
    headers: { 'Content-Type': 'application/json',Authorization: getToken() },
    
  }
  await axios.request(options).then(sucessCallback).catch(errorCallback);
};

//CRUD PARA USUARIOS

export const obtenerUsuarios=async(sucessCallback,errorCallback)=>{
  const options={method:'GET',
  url:'http://localhost:5000/usuarios',
  headers:{
  Authorization: getToken(),
  }
};
  await axios.request(options).then(sucessCallback).catch(errorCallback);
};

//CRUD DE VENTAS
export const crearVenta=async(data,sucessCallback,errorCallback)=>{
  const options={
    method:'POST',
    url:'http://localhost:5000/ventas',
    headers:{'Content-Type':'application/json',Authorization: getToken()},
    data,
    };
  await axios.request(options).then(sucessCallback).catch(errorCallback);
};


