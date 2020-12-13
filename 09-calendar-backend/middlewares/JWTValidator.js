const jwt = require('jsonwebtoken');

const JWTValidator = (req, res, next) => {
	const token = req.header('x-token'); // definimos un nombre personaliado en el header con x-algo

	if (!token) {
		return res.status(401).json({
			ok: false,
			msg: "Token doesn't exists",
		});
	}

	try {
    const payload = jwt.verify(
      token,
      process.env.JWT_SKEY_SEED,
    );

    req.uid = payload.uid;
    req.name = payload.name;

	} catch (error) {
		return res.status(401).json({
			ok: false,
			msg: 'Invalid token',
		});
	}

	next(); // Esto ejecutará la siguiente función, es decir el controlador del renew
};

module.exports = {
	JWTValidator,
};
