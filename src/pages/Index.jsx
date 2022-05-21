import { useDarkMode } from 'context/darkMode';
import React from 'react';

const Index = () => {
  const { darkMode } = useDarkMode();
  return (
    <div className={`flex h-full bg-gray-${darkMode ? '900' : '50'}`}>
      <img alt='foto ferrari' 
      src='https://prueba-jarol-andres.s3.us-east-2.amazonaws.com/media-concesionario/oficina.png'/>
    </div>
  );
};

export default Index;
