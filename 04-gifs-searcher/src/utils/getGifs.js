export const getGifs = async category => {

	const url = `https://api.giphy.com/v1/gifs/search?q=${category ||
		'burgers'}&limit=20&api_key=${process.env.REACT_APP_GHIPY_KEY}`;
	const resp = await fetch(url);
	const { data } = await resp.json();

	const imgs = data.reduce(
		(acc, { id, images: { fixed_height } = {}, title, url }) => {
			return [
				...acc,
				{ id, gif: fixed_height.webp, title, link: url },
			];
		},
		[],
	);

	return imgs;
}

