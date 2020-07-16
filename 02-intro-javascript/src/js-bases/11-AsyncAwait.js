export const getImagePromise = async () => {
	try {
		const apiKey = 'f5RDSoPgQf1hJ48d90Yk6rbYvrvP7e2l';
		const baseStikersURL = 'http://api.giphy.com/v1/stickers/random?api_key=';

		const resp = await fetch(`${baseStikersURL}${apiKey}`);

		const { data } = await resp.json();

		const { url } = data.images.original;

		const img = document.createElement('img');
		img.src = url;
        document.body.append(img);
        
		return img;
	} catch (error) {
		console.error(error);
	}
};

