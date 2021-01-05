const baseURL = process.env.REACT_APP_API_URL;

export const noTokenFetch = async (endPoint, data, method = 'GET') => {
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
	}

	return await response.json();
};

export const tokenFetch = async (endPoint, data, method = 'GET') => {
	const token = localStorage.getItem('token');

	const url = `${baseURL}/${endPoint}`;

	let response;

	if (method !== 'GET') {
		response = await fetch(url, {
			method,
			headers: {
				'Content-Type': 'application/json',
				"x-token": token,
			},
			body: JSON.stringify(data),
		});
	} else {
		response = await fetch(url, {
			method,
			headers: {
				"x-token": token,
			},
		});
	}

	return await response.json();
};
