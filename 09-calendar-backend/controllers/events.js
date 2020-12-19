const Event = require('../models/Events');

const getEvent = (req, res) => {

	return res.json({
		ok: true,
		msg: 'getEvent',
		body: req.body,
	});
};

const newEvent = async(req, res) => {
	const event = new Event(req.body); // Creando una nueva instancia del Evento para la base de datos

	try {

		event.user = req.uid; // validamos el user id con referencia al modelo

		const	savedEvent = await event.save(); // guardamos la instancia del evento, esperando primero a que no existan problemas

		res.status(200).json({
			ok: false,
			event: savedEvent,
		})

	} catch (error) {

		console.log(error);

		return res.status(500).json({
			ok: 'false',
			msg: 'DB Error, please contact the admin',
		});
	}
};

const updateEvent = (req, res) => {
	try {
		return res.json({
			ok: true,
			msg: 'updateEvent',
		});
	} catch (error) {
		console.log(error);
	}
};

const deleteEvent = (req, res) => {
	return res.json({
		ok: true,
		msg: 'deleteEvent',
	});
};

module.exports = {
	getEvent,
	newEvent,
	updateEvent,
	deleteEvent,
};
