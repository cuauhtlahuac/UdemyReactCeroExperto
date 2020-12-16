const getEvent = (req, res) => {
	console.log(req.body);
	return res.json({
		ok: true,
		msg: 'getEvent',
		body: req.body
	});
};

const newEvent = (req, res) => {
	return res.json({
		ok: true,
		msg: 'newEvent',
	});
};

const updateEvent = (req, res) => {
  try{
    return res.json({
      ok: true,
      msg: 'updateEvent',
    });
  }catch(error){
    console.log(error);
  }
};

const deleteEvent = (req, res) => {
	return res.json({
		ok: true,
		msg: 'deleteEvent',
	});
};

module.exports = {
	getEvent,
	newEvent,
	updateEvent,
	deleteEvent,
};
