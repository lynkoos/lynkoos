// src/components/O/Public.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const Public = () => {
  const { nombreUsuario } = useParams();

  return (
    <div>
      <h1>Página pública de {nombreUsuario}</h1>
    </div>
  );
};

export default Public;
