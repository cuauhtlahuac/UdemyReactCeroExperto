const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

const User = require('../models/User');

const register = async (req, res) => {
	const { email, password } = req.body;

	try {
		// revisa si existe el email
		let user = await User.findOne({ email });

		if (user) {
			return res.status(400).json({
				ok: false,
				msg: 'The email already exist',
			});
		}

		user = new User(req.body);

		// Encriptar contraseña
		const salt = bcrypt.genSaltSync(13);
		const hash = bcrypt.hashSync( password, salt);

		user.password = hash;

		await user.save();

		res.status(201).json({
			ok: true,
			uid: user.id,
			name: user.name,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			ok: false,
			msg: 'Something went wrong. Please contact with to your administrator',
		});
	}
};

const login = async(req, res) => {
	const { email, password } = req.body;

	try {
		const user = await User.findOne({ email });

		if (!user) {
			console.log("Email doesn't exists");
			return res.status(400).json({
				ok: false,
				msg: 'Your email or password is incorrect',
			});
		}
		
		const validPassword = bcrypt.compareSync( password, user.password);
		
		if(!validPassword){
			console.log("Password is incorrect");
			return res.status(400).json({
				ok: false,
				msg: 'Your email or password is incorrect',
			});
		}

		return res.status(200).json({
			ok: true,
			name: user.name,
			uid: user.id,
		});

	} catch(error) {
		console.log(error);
		res.status(500).json({
			ok: false,
			msg: 'Something went wrong. Please contact with to your administrator',
		});
	}
};

const renew = function(req, res) {
	res.send({ ok: true, msg: 'renew' });
};

module.exports = {
	login,
	register,
	renew,
};
