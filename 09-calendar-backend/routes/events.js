const { Router } = require('express');
const router = Router();
const { check, body } = require('express-validator');

const isDate = require('../helpers/isDate');
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
	check('start', 'Start date is required').custom( isDate ),
	check('end', 'End date is required').custom( isDate ),
	fieldsValidator, // Ya habíamos creado este middleware evita pasar al controlador si fallan los middleware validations anteriores
], newEvent);

router.put('/:id', updateEvent);

router.delete('/:id', deleteEvent);

module.exports = router;
