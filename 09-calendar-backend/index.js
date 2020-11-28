const express = require('express');
require('dotenv').config(); // Llamamos variable de entorno

console.log(process.env); // imprimimos todos los procesos en el entorno

// crear servidor de express
const app = express();

// Directorio Público
app.use( // use es un middleware más información http://expressjs.com/en/guide/writing-middleware.html#writing-middleware-for-use-in-express-apps
   express.static(
     'public' // The root argument specifies the root directory from which to serve static assets.
  ) 
)

// Route definition takes the following structure: app.METHOD(PATH, HANDLER)
/* app.get('/', (req, res) => {
   res.json({"say": 'hi'}) // sending a json 
  });
 */

// Escuchar peticiones
app.listen( process.env.PORT, () => 
    {
      console.log(`Server running in port ${ 4000 }`);
    }
  );
