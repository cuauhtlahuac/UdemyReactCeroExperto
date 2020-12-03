const { Router } = require('express'); // Usamos el router de express
const router = Router();

const { check } = require('express-validator');

const { login, register, renew } = require('../controllers/auth');

router.post(
 '/', // RUTA
 [// se pueden aplicar los middlewares directo entre la ruta y el controlador
  // incluso se puede hacer una colección de middlewares usando los corchetes
    check( 'name', 'Error Message: The name is required').notEmpty() // El campo, El mensaje, y la validación del campo
  ] 
 ,login); // CONTROLADOR

router.post('/register', register);

router.get('/renew', renew);

module.exports = router;
