const { Router } = require('express');
const router = Router();

const { JWTValidator } = require('../middlewares/JWTValidator');

const {
	getEvent,
	newEvent,
	updateEvent,
	deleteEvent,
} = require('../controllers/events');

router.use(JWTValidator); // Aquí validamos el token antes de ejecutar las rutas

router.get('/', getEvent);

router.post('/', newEvent);

router.put('/:id', updateEvent);

router.delete('/:id', deleteEvent);

module.exports = router;
