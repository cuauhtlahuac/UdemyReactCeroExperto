const express = require('express');
const { dbConnection } = require('./database/config');

require('dotenv').config();

const app = express();

// Base de Datos
dbConnection();

app.use(
   express.static(
     'public'
  ) 
)

app.use( express.json() );

app.use('/api/auth', require('./routes/auth'))

app.listen( process.env.PORT, () => 
    {
      console.log(`Server running in port ${ 4000 }`);
    }
  );
