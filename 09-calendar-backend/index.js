const express = require('express');
const cors = require('cors')

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

app.use(cors())

app.use('/api/auth', require('./routes/auth'))

app.use('/api/events', require('./routes/events'))

app.listen( process.env.PORT, () => 
    {
      console.log(`Server running in port ${ process.env.PORT }`);
    }
  );
