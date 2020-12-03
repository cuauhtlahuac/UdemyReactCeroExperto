const { validationResult } = require('express-validator');

const login = (req, res) => {
  const { name, email, password } = req.body;
  
	const errors = validationResult( req );

	if( !errors.isEmpty() ){
		res.status(400).json({
			ok: false,
			errors: errors.mapped()
		})
	}

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
	res.json({
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
