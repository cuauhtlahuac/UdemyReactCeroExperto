const baseURL = process.env.REACT_APP_API_URL;

export const calendarFetch = async (endPoint, data, method = 'GET') => {
	const url = `${baseURL}/${endPoint}`;

	let response;

	if (method !== 'GET') {
		response = await fetch(url, {
			method,
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});
	} else {
		response = await fetch(url);
	};

	return await response.json();
};
