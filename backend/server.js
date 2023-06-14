const express = require('express');
const app = express();

// Configurar rutas y middleware
// Aquí es donde definirías tus rutas y configuraciones de middleware, como body-parser, cors, etc.

// Ejemplo de ruta básica
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

// Iniciar el servidor
const port = 3001; // Puerto en el que se ejecutará el servidor
app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});
