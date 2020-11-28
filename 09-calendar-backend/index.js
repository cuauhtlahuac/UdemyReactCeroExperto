const express = require('express');

// crear servidor de express
const app = express();

// Escuchar peticiones
app.listen(
    4000, // Primer argumento es el puerto, evitar poner mismo que FE
    () => { // Segundo arg se ejecuta cuando el servidor está levantado
      console.log(`Server running in port ${ 4000 }`);
    }
  )

  // ya tenemos corriendo un backend server 😱
  // Se puede probar en postman o en el navegador con la siguiente url
  // http://localhost:4000/