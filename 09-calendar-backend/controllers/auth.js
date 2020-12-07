const { validationResult } = require('express-validator');
const User = require('../models/User')

const login = async(req, res) => {
	try{
		const user = new User( req.body )
		
		await user.save()
	
		res.status(201).json({
			ok: true,
			msg: 'login',
		});

	} catch(error) {
		console.log(error);
		res.status(500).json({
			ok: false,
			msg: 'Something went wrong. Please contact with to your administrator'
		});
	}
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
