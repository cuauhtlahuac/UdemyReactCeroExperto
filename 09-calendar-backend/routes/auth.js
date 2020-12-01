const { Router } = require('express'); // Usamos el router de express
const router = Router();

const { login, register, renew } = require('../controllers/auth');

router.post('/', login);

router.post('/register', register);

router.get('/renew', renew);

module.exports = router;
