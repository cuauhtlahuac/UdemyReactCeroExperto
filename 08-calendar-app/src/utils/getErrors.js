export const getErrorsMsgs = body => {
	let errorMsgs = body.msg || '';

  const { errors } = body;

	if (errors) {
		for (let error in errors) {
			errorMsgs += `${errors[error].msg}<br/><br/>`;
		}
	}

	return errorMsgs;
};
