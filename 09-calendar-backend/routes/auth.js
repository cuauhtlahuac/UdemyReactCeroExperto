const { Router } = require('express'); // Usamos el router de express
const router = Router();

router.get('/', (req, res) => {
	res.json({ say: 'hi' });
});

router.get('/other', function(req, res) {
	res.send('Other Page');
});

module.exports = router;
