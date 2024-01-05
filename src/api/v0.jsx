const express = require('express');
const mysql = require('mysql');

const app = express();
const PORT = 3005;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'owell',
  password: 'JZH@JURPwXJIpODM',
  database: 'snapcode',
});

db.connect((err) => {
  if (err) {
    console.error('Error al conectar a MySQL:', err);
  } else {
    console.log('Conexión a MySQL exitosa');
  }
});

app.use(express.json()); // Agrega middleware para parsear JSON en las solicitudes

app.post('/register', (req, res) => {
  const { nombre, apellido, username, contrasena, fotoPerfil } = req.body;

  const query = 'INSERT INTO usuarios (nombre, apellido, username, contrasena, foto_perfil) VALUES (?, ?, ?, ?, ?)';

  db.query(query, [nombre, apellido, username, contrasena, fotoPerfil], (error, results) => {
    if (error) {
      console.error('Error al registrar nuevo usuario:', error);
      res.status(500).json({ error: 'Error al registrar nuevo usuario' });
    } else {
      res.json({ message: 'Usuario registrado exitosamente' });
    }
  });
});

// Ruta para obtener todos los usuarios (solo para fines de prueba)
app.get('/usuarios', (req, res) => {
  const query = 'SELECT * FROM usuarios';

  db.query(query, (error, results) => {
    if (error) {
      console.error('Error al realizar la consulta:', error);
      res.status(500).json({ error: 'Error al obtener usuarios' });
    } else {
      res.json(results);
    }
  });
});

// Cerrar conexión a MySQL cuando la aplicación se detiene
process.on('SIGINT', () => {
  console.log('Cerrando conexión a MySQL');
  db.end();
  process.exit();
});

app.listen(PORT, () => {
  console.log(`Servidor backend iniciado en el puerto ${PORT}`);
});