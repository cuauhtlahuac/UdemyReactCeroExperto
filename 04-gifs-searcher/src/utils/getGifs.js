import sortBy from 'lodash/sortBy';
export const getGifs = async category => {
	const url = `https://api.giphy.com/v1/gifs/search?q=${category ||
		'burgers'}&limit=20&api_key=${process.env.REACT_APP_GHIPY_KEY}`;
	const resp = await fetch(url);
	const { data } = await resp.json();

	const imgs = data.reduce(
		(acc, {
				id,
				title,
				url,
				images: { fixed_height },
			   }) => {
			return [
				...acc,
				{
					id,
					title,
					link: url,
					gif: fixed_height.webp,
					webp_size: Number(fixed_height.webp_size),
				},
			];
		},
		[],
	);
	
	const sortImgs = sortBy(imgs, 'webp_size');

	return sortImgs;
};
