const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const multer = require('multer');
const axios = require('axios');
const { v4: uuidv4 } = require('uuid');
const history = require('connect-history-api-fallback');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Configuración de multer para manejar la carga de imágenes
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images');
    },
    filename: (req, file, cb) => {
        cb(null, uuidv4() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

// Middleware para manejar las rutas de la aplicación frontend
app.use(history());

// Ruta para servir archivos estáticos de la carpeta dist
app.use(express.static('public/dist'));

// Ruta para servir archivos estáticos de la carpeta images
app.use('/images', express.static('public/images'));

// Configuración de CORS
app.use(cors());

const dataFilePath = 'public/data.json';

// Función para descargar una imagen desde una URL
const downloadImage = async (url, destination) => {
    const response = await axios({
        url,
        method: 'GET',
        responseType: 'stream',
    });

    response.data.pipe(fs.createWriteStream(destination));

    return new Promise((resolve, reject) => {
        response.data.on('end', () => {
            resolve();
        });

        response.data.on('error', (error) => {
            reject(error);
        });
    });
};

// Endpoint para agregar nuevas imágenes
app.post('/api/data', upload.single('image'), async (req, res) => {
    console.log('Recibida solicitud POST');

    fs.readFile(dataFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error al leer los datos.');
            return;
        }

        console.log('Datos leídos correctamente');

        let currentData = JSON.parse(data);

        // Obtén datos de la solicitud
        const newData = req.body;

        if (req.file) {
            // Se adjuntó un archivo, simplemente copia la imagen subida al directorio de imágenes
            newData.id = uuidv4();
            newData.url = '/images/' + req.file.filename;
        } else if (newData.image) {
            // Se proporcionó una URL, descarga la imagen desde la URL
            const imageName = uuidv4() + '-downloaded.jpg';
            const imagePath = 'public/images/' + imageName;

            downloadImage(newData.image, imagePath)
                .then(() => {
                    newData.id = uuidv4();
                    newData.url = '/images/' + imageName;
                    currentData.push(newData);

                    fs.writeFile(dataFilePath, JSON.stringify(currentData), (err) => {
                        if (err) {
                            console.error(err);
                            res.status(500).send('Error al escribir los datos.');
                            return;
                        }

                        console.log('Datos agregados correctamente');
                        res.json({ success: true, message: 'Datos agregados correctamente.' });
                    });
                })
                .catch((error) => {
                    console.error(error);
                    res.status(500).send('Error al descargar la imagen desde la URL.');
                });

            return;  // ¡Importante! Asegúrate de incluir un return aquí para evitar que el código siga ejecutándose.
        } else {
            res.status(400).send('No se proporcionó ni un archivo ni una URL de imagen.');
            return;
        }
    });
});

// Endpoint para eliminar una imagen
app.delete('/api/data/:id', (req, res) => {
    console.log('Recibida solicitud DELETE');

    const idToDelete = req.params.id;

    fs.readFile(dataFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error al leer los datos.');
            return;
        }

        console.log('Datos leídos correctamente');

        let currentData = JSON.parse(data);

        // Encuentra la imagen con el ID proporcionado
        const imageToDelete = currentData.find((image) => image.id === idToDelete);

        if (!imageToDelete) {
            res.status(404).send('Imagen no encontrada.');
            return;
        }

        // Elimina la imagen del array de datos
        currentData = currentData.filter((image) => image.id !== idToDelete);

        // Guarda el nuevo array de datos en el archivo JSON
        fs.writeFile(dataFilePath, JSON.stringify(currentData), (err) => {
            if (err) {
                console.error(err);
                res.status(500).send('Error al escribir los datos.');
                return;
            }

            console.log('Datos actualizados después de eliminar la imagen');

            // Elimina el archivo de la carpeta de imágenes
            const imagePath = 'public' + imageToDelete.url;
            fs.unlink(imagePath, (err) => {
                if (err) {
                    console.error(err);
                    res.status(500).send('Error al eliminar la imagen.');
                    return;
                }

                console.log('Imagen eliminada correctamente');
                res.json({ success: true, message: 'Imagen eliminada correctamente.' });

                return;
            });
        });
    });
});

// Endpoint para actualizar una imagen
app.put('/api/data/:id', upload.single('image'), async (req, res) => {
    console.log('Recibida solicitud PUT');

    const idToUpdate = req.params.id;

    fs.readFile(dataFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error al leer los datos.');
            return;
        }

        console.log('Datos leídos correctamente');

        let currentData = JSON.parse(data);

        // Encuentra la imagen con el ID proporcionado
        const imageToUpdateIndex = currentData.findIndex((image) => image.id === idToUpdate);

        if (imageToUpdateIndex === -1) {
            res.status(404).send('Imagen no encontrada.');
            return;
        }

        // Obtén datos de la solicitud
        const updatedData = req.body;

        if (req.file) {
            // Se adjuntó un archivo, actualiza la imagen subida en el directorio de imágenes
            updatedData.id = idToUpdate;
            updatedData.url = '/images/' + req.file.filename;
        } else if (updatedData.image && updatedData.image !== currentData[imageToUpdateIndex].image) {
            // Se proporcionó una URL diferente, descarga la imagen desde la nueva URL
            const imageName = uuidv4() + '-downloaded.jpg';
            const imagePath = 'public/images/' + imageName;

            downloadImage(updatedData.image, imagePath)
                .then(() => {
                    updatedData.id = idToUpdate;
                    updatedData.url = '/images/' + imageName;
                    currentData[imageToUpdateIndex] = updatedData;

                    fs.writeFile(dataFilePath, JSON.stringify(currentData), (err) => {
                        if (err) {
                            console.error(err);
                            res.status(500).send('Error al escribir los datos.');
                            return;
                        }

                        console.log('Datos actualizados correctamente');
                        res.json({ success: true, message: 'Datos actualizados correctamente.' });
                    });
                })
                .catch((error) => {
                    console.error(error);
                    res.status(500).send('Error al descargar la imagen desde la URL.');
                });

            return;  // ¡Importante! Asegúrate de incluir un return aquí para evitar que el código siga ejecutándose.
        } else {
            // No se proporcionó un archivo ni una URL de imagen diferente, solo actualiza los otros campos
            updatedData.id = idToUpdate;
            updatedData.url = currentData[imageToUpdateIndex].url; // Mantiene la URL existente
            currentData[imageToUpdateIndex] = updatedData;

            fs.writeFile(dataFilePath, JSON.stringify(currentData), (err) => {
                if (err) {
                    console.error(err);
                    res.status(500).send('Error al escribir los datos.');
                    return;
                }

                console.log('Datos actualizados correctamente');
                res.json({ success: true, message: 'Datos actualizados correctamente.' });
            });
        }
    });
});


// Manejo global de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo salió mal.');
});

app.listen(port, () => {
    console.log(`API escuchando en http://localhost:${port}`);
});
