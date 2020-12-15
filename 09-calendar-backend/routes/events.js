const { Router } = require('express');
const router = Router();

const {
	getEvent,
	newEvent,
	updateEvent,
	deleteEvent,
} = require('../controllers/events');

router.get('/', getEvent);

router.post('/', newEvent);

router.put('/:id', updateEvent);

router.delete('/:id', deleteEvent);

module.exports = router;
