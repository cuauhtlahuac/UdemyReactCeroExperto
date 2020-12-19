const { Schema, model } = require('mongoose');

const EventSchema = Schema({
	title: {
		type: String,
		required: true,
	},
	notes: {
		type: String,
	},
	start: {
		type: Date,
		required: true,
	},
	end: {
		type: Date,
		required: true,
	},
	user: {
		type: Schema.Types.ObjectId, // Especificamos el id
		ref: 'User', // Hacemos la referencia al esquema
		required: true,
	},
});

module.exports = model('Event', EventSchema);
