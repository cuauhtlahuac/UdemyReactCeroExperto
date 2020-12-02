const express = require('express');
require('dotenv').config();

const app = express();

// Directorio Público
app.use( // use es un middleware más información http://expressjs.com/en/guide/writing-middleware.html#writing-middleware-for-use-in-express-apps
   express.static(
     'public' // The root argument specifies the root directory from which to serve static assets.
  ) 
)

// Lectura y parseo del body de una petición
app.use( express.json() ) // las peticiones json serán procesadas aquí

// Rutas:
app.use('/api/auth', require('./routes/auth'))

// Escuchar peticiones
app.listen( process.env.PORT, () => 
    {
      console.log(`Server running in port ${ 4000 }`);
    }
  );
