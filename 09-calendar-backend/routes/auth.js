const { Router } = require('express'); // Usamos el router de express
const router = Router();

const { check } = require('express-validator');

const { login, register, renew } = require('../controllers/auth');

router.post(
 '/',
 [
    check( 'name', 'Error Message: The name is required').notEmpty()
 ] 
 ,login);

router.post('/register', register);

router.get('/renew', renew);

module.exports = router;
