const Event = require('../models/Events');

const getEvent = async (req, res) => {
	try {
		const events = await Event.find().populate('user', 'name'); // Aquí se puede agregar paginación

		return res.json({
			ok: true,
			events: events,
		});
	} catch (error) {
		res.status(500).json({
			ok: false,
			msg: "can't reach events in DB",
		});
	}
};

const newEvent = async (req, res) => {
	const event = new Event(req.body); // Creando una nueva instancia del Evento para la base de datos

	try {
		event.user = req.uid; // validamos el user id con referencia al modelo

		const savedEvent = await event.save(); // guardamos la instancia del evento, esperando primero a que no existan problemas

		res.status(200).json({
			ok: true,
			event: savedEvent,
		});
	} catch (error) {
		console.log(error);

		return res.status(500).json({
			ok: 'false',
			msg: 'DB Error, please contact the admin',
		});
	}
};

const updateEvent = async (req, res) => {
	const eventId = req.params.id;
	const uid = req.uid;

	try {
		const event = await Event.findById(eventId);

		if (!event) {
			return res.status(404).json({
				ok: false,
				msg: "Event don't found",
			});
		}

		if (event.user.toString() !== uid) {
			return res.status(401).json({
				ok: false,
				msg: "You can't edit this event",
			});
		}

		const newEvent = {
			...req.body,
			user: uid,
		};

		const eventUpdated = await Event.findByIdAndUpdate(eventId, newEvent, {
			new: true, // new: bool - true to return the modified document rather than the original. defaults to false
		});

		return res.status(200).json({
			ok: true,
			msg: 'updateEvent',
			event: eventUpdated,
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			ok: false,
			msg: 'Please contact the admin',
			event,
		});
	}
};

const deleteEvent = async(req, res) => {
	const eventId = req.params.id;
	const uid = req.uid;

	try {
		const event = await Event.findById(eventId);

		if (!event) {
			return res.status(404).json({
				ok: false,
				msg: "Event don't found",
			});
		}

		if (event.user.toString() !== uid) {
			return res.status(401).json({
				ok: false,
				msg: "You can't delete this event",
			});
		}

		const eventUpdated = await Event.findByIdAndRemove(eventId);

		return res.status(200).json({
			ok: true,
			msg: 'Event was deleted'
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			ok: false,
			msg: 'Please contact the admin',
			event,
		});
	}
};

module.exports = {
	getEvent,
	newEvent,
	updateEvent,
	deleteEvent,
};
