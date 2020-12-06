const { validationResult } = require('express-validator');
const User = require('../models/User')

const login = (req, res) => {

	// aqui creamos la nueva instancia de User
	const user = new User( req.body )
	
	// Para guardar la información sólo tenemos que aplicar el método 
	user.save()

	res.status(201).json({
		ok: true,
		msg: 'login',
	});
};

const register = (req, res) => {
	const { email, password } = req.body;

	res.status(200).json({
		ok: true,
		msg: 'register',
		email,
		password,
	});
};

const renew = function(req, res) {
	res.send({ ok: true, msg: 'renew' });
};

module.exports = {
	login,
	register,
	renew,
};
