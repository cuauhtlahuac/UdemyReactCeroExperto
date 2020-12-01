const { Router } = require('express'); // Usamos el router de express
const router = Router();

router.post('/', (req, res) => {
	res.json({ ok: true, msg: 'login' });
});

router.post('/register', (req, res) => {
	res.json({ ok: true, msg: 'register' });
});

router.get('/renew', function(req, res) {
	res.send({ ok: true, msg: 'renew' });
});

module.exports = router;
