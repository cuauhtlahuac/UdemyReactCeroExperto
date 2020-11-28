const express = require('express');

// crear servidor de express
const app = express();


// Route definition takes the following structure: app.METHOD(PATH, HANDLER)
app.get(
 '/', // PATH
 (req, res) => { res.send('Hello world') }); // HANDLER


// Escuchar peticiones
app.listen( 4000, () => 
    {
      console.log(`Server running in port ${ 4000 }`);
    }
  );
