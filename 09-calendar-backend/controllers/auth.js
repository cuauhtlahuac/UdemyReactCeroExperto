/* Las funciones que serán llamadas cuando se acceda a la ruta */
/* Anteriormente las teniamos en la misma ruta  pero se separo por praticidad*/

const login = (req, res) => {
  const { name, email, password } = req.body;
  
  if(name.length < 5){
    return res.status(400).json({
      ok: false,
      msg: 'El nombre debe ser de 5 letras'  
    });
  }

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
