const { Router } = require('express'); // Usamos el router de express
const router = Router();

const { check } = require('express-validator');

const { login, register, renew } = require('../controllers/auth');

router.post(
	'/',
	[
		check('name', 'Error Message: The name is required').notEmpty(),
		check('email', 'Error Message: The email is required').isEmail(),
		check(
			'password',
			'Error Message: The password is required with 6 characters as minimum',
		).isLength({ min: 6 }),
	],
	login,
);

router.post(
	'/register',
	[
		check('email', 'Error Message: The email is required').isEmail(),
		check('password', 'The password must be 5+ chars long and contain a number')
			.not()
			.isIn([ '123456', 'password', 'god' ])
			.withMessage('Do not use a common word as the password')
			.isLength({ min: 6 })
			.matches(/\d/),
	],
	register,
);

router.get('/renew', renew);

module.exports = router;
