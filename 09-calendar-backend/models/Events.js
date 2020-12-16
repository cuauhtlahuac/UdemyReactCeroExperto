const { Schema, model } = require('mongoose');

const EventSchema = Schema({
	title: {
		type: String,
		require: true,
	},
	notes: {
		type: String,
	},
	start: {
		type: Date,
		require: true,
	},
	end: {
		type: Date,
		require: true,
  },
  user: {
    type: Schema.Types.ObjectId, // Especificamos el id
    ref: 'User', // Hacemos la referencia al esquema
  }
});

module.exports = model('Event', EventSchema);
