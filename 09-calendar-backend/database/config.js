const mongoose = require('mongoose');

const dbConnection = async () => {
	try {
	  await	mongoose.connect(process.env.DB_CONNECTION, {
			useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    
    console.log('DB Online');

	} catch (error) {
		console.log(error);
		throw new Error('Error whit BD initialization');
	}
};


module.exports = {
  dbConnection
}