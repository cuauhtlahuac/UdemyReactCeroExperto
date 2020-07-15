const apiKey = 'f5RDSoPgQf1hJ48d90Yk6rbYvrvP7e2l'; // Escribir después de la url y el "?"" sign

const baseGifsURL = 'http://api.giphy.com/v1/gifs/random?api_key=';
// const baseStikersURL = 'http://api.giphy.com/v1/stickers/random?api_key=';

const peticion = fetch(`${baseGifsURL}${apiKey}`);

export const getRandomImage = () =>
	peticion
		.then((resp) => resp.json())
		.then(({ data }) => {
			const { url } = data.images.original;

			const img = document.createElement('img');
			img.src = url;

			document.body.append(img);

			return img;
		})
		.catch((err) => console.warn(err));
