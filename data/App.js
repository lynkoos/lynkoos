// App.js

const data = require('./App.json');

// Función para obtener todas las publicaciones
const getPublicaciones = () => {
  return data.publicaciones;
};

// Función para obtener todas las notificaciones
const getNotificaciones = () => {
  return data.notificaciones;
};

// Función para obtener todas las historias
const getHistorias = () => {
  return data.historias;
};

// Función para obtener todos los eventos
const getEventos = () => {
  return data.eventos;
};

// Función para obtener información del sistema
const getSistemaInfo = () => {
  return data.sistema;
};

// Función para obtener la URL de la imagen de la publicación
const getImagenPublicacion = (publicacionId) => {
  const publicacion = data.publicaciones.find(post => post.id === publicacionId);
  if (publicacion) {
    return publicacion.contenido;
  } else {
    return null;
  }
};

// Exportar las funciones
module.exports = {
  getPublicaciones,
  getNotificaciones,
  getHistorias,
  getEventos,
  getSistemaInfo,
  getImagenPublicacion
};
