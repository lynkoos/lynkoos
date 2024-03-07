+------------------------------------+
|        Documentación Lynkoos       |
+------------------------------------+

1. Tabla `usuarios`:
   - Función: Almacena información sobre los usuarios registrados en la plataforma Lynkoos.
   - Estructura:
     - `id`: Identificador único del usuario.
     - `nombre`: Nombre del usuario.
     - `apellido`: Apellido del usuario.
     - `nombreUsuario`: Nombre de usuario único para identificación.
     - `genero`: Género del usuario.
     - `fechaNacimiento`: Fecha de nacimiento del usuario.
     - `contraseña_hash`: Hash de la contraseña del usuario.
     - `avatar`: URL de la imagen de perfil del usuario.
     - `banner`: URL de la imagen de banner del usuario.
     - `estado`: Estado del usuario (activo o inactivo).
     - `token`: Token de autenticación del usuario.
     - `qr_id`: ID del código QR asociado al usuario.
   - Cómo enviar datos:
     - Todos los campos son requeridos excepto `estado`.
     - El campo `token` debe ser generado al autenticar al usuario.
     - El campo `qr_id` debe corresponder al ID de un código QR existente en la tabla `qr`.

2. Tabla `qr`:
   - Función: Almacena información sobre los códigos QR asociados a los usuarios.
   - Estructura:
     - `id`: Identificador único del código QR.
     - `url_img`: URL de la imagen del código QR.
   - Cómo enviar datos:
     - El campo `id` debe ser único para cada código QR.
     - El campo `url_img` debe ser la URL de una imagen válida que represente el código QR.

3. Tabla `historias`:
   - Función: Almacena historias publicadas por los usuarios.
   - Estructura:
     - `id`: Identificador único de la historia.
     - `usuario_id`: ID del usuario que publicó la historia.
     - `descripcion`: Descripción de la historia.
     - `hora`: Hora de publicación de la historia.
     - `fecha`: Fecha de publicación de la historia.
     - `url_img`: URL de la imagen asociada a la historia.
   - Cómo enviar datos:
     - Todos los campos son requeridos.
     - El campo `usuario_id` debe corresponder al ID de un usuario existente en la tabla `usuarios`.

4. Tabla `insignias`:
   - Función: Almacena información sobre las insignias disponibles para los usuarios.
   - Estructura:
     - `id`: Identificador único de la insignia.
     - `nombre`: Nombre de la insignia.
     - `descripcion`: Descripción de la insignia.
     - `url_img`: URL de la imagen representativa de la insignia.
   - Cómo enviar datos:
     - Todos los campos son requeridos.

5. Tabla `logs`:
   - Función: Almacena registros de acciones realizadas por los usuarios.
   - Estructura:
     - `id`: Identificador único del registro.
     - `titulo`: Título del registro.
     - `descripcion`: Descripción detallada de la acción realizada.
     - `accion`: Tipo de acción realizada (publicación, reacción, eliminación, etc.).
     - `id_publicacion`: ID de la publicación asociada a la acción (si corresponde).
     - `hora`: Hora en que se registró la acción.
     - `fecha`: Fecha en que se registró la acción.
   - Cómo enviar datos:
     - Todos los campos son requeridos.
     - El campo `id_publicacion` debe corresponder al ID de una publicación existente en la tabla `posts`.

6. Tabla `posts`:
   - Función: Almacena publicaciones realizadas por los usuarios.
   - Estructura:
     - `id`: Identificador único de la publicación.
     - `usuario_id`: ID del usuario que realizó la publicación.
     - `titulo`: Título de la publicación.
     - `descripcion`: Descripción de la publicación.
     - `url_img`: URL de la imagen asociada a la publicación.
     - `hora`: Hora de publicación de la historia.
     - `fecha`: Fecha de publicación de la historia.
   - Cómo enviar datos:
     - Todos los campos son requeridos.
     - El campo `usuario_id` debe corresponder al ID de un usuario existente en la tabla `usuarios`.
