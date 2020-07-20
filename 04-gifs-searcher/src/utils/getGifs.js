export const getGifs = async category => {

	const url = `https://api.giphy.com/v1/gifs/search?q=${category ||
		'burgers'}&limit=20&api_key=${process.env.REACT_APP_GHIPY_KEY}`;
	const resp = await fetch(url);
	const { data } = await resp.json();

	const imgs = data.reduce(
		(acc, { id, images: { downsized_medium } = {}, title, url }) => {
			return [
				...acc,
				{ id, gif: downsized_medium.url, title, link: url },
			];
		},
		[],
	);

	return imgs; // al ser async regresa una promesa
};
