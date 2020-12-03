const { validationResult } = require('express-validator');

const login = (req, res) => {
  const { name, email, password } = req.body;
  
	const errors = validationResult( req );
	console.log(errors); // imprimimos los errores que posteriormente usaremos para responder
	/*
	respuesta:

	{
		value: undefined,
		msg: 'Error Message: The name is required',
		param: 'name',
		location: 'body'
	}
	
	*/

	res.json({
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
