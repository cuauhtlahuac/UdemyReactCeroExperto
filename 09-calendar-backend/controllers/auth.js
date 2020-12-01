/* Las funciones que serán llamadas cuando se acceda a la ruta */
/* Anteriormente las teniamos en la misma ruta  pero se separo por praticidad*/

const login = (req, res) => {
	res.json({ ok: true, msg: 'login' });
};

const register = (req, res) => {
	res.json({ ok: true, msg: 'register' });
};

const renew = function(req, res) {
	res.send({ ok: true, msg: 'renew' });
};

module.exports = {
	login,
	register,
	renew,
};
