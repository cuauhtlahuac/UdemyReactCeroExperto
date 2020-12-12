const JWTValidator = (req, res, next) => {
  const jwt = require('jsonwebtoken');

  const token = req.header('x-token') // definimos un nombre personaliado en el header con x-algo

  console.log(token); // Verificamos que recibimos el token correctamente

  next(); // Esto ejecutará la siguiente función, es decir el controlador del renew
}

module.exports = {
  JWTValidator
}