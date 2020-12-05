const { validationResult } = require('express-validator');

const login = (req, res) => {
  const { name, email, password } = req.body;

	res.status(201).json({
		ok: true,
		msg: 'login',
		name,
		email,
		password,
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
