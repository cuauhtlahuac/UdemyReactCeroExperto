const jwt = require('jsonwebtoken');

const JWTGenerator = (
	// Colocamos como parametros lo que queremos encriptar
	uid,
	name,
) => {
	return new Promise((resolve, reject) => {
		const payload = { name, uid };

		jwt.sign(
			//primer argumento el payload
			payload,
			// segundo argumento, la palabra secreta, Secrete Private Key
			process.env.JWT_SKEY_SEED,
			// tercer argumento options
			{
				expiresIn: '2h',
			},
			// Cuarto argumento, callback
			(err, token) => {
				if (err) {
					console.log(err);
					return reject("Can't generate the Token");
				}

				return resolve(token);
			},
		);
	});
};

module.exports = {
	JWTGenerator,
};
