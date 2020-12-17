const { Router } = require('express');
const router = Router();
const { check, body } = require('express-validator');

const { JWTValidator } = require('../middlewares/JWTValidator');
const { fieldsValidator } = require('../middlewares/fields-validators');

const {
	getEvent,
	newEvent,
	updateEvent,
	deleteEvent,
} = require('../controllers/events');

router.use(JWTValidator); // Aquí validamos el token antes de ejecutar las rutas

router.get('/', getEvent);

router.post('/', [ 
	check('title', 'Title is required').not().isEmpty(),
	fieldsValidator, // Ya habíamos creado este middleware para evitar que pase al controlador
], newEvent);

router.put('/:id', updateEvent);

router.delete('/:id', deleteEvent);

module.exports = router;
