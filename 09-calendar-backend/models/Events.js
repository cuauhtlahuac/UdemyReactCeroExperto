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

EventSchema.method('toJSON', function(){ // Cuidado de escribirlo bien
	const { __v, _id, ...object} = this.toObject(); // Aquí hago referencia al objeto que se está creando, osea accesso a cada una de las propiedades
	object.id = _id;
	return object; // Solo hacemos referencia a lo que se va a guardar en la respuesta y no en la BD
})

module.exports = model('Event', EventSchema);
