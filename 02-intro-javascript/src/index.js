const apiKey = 'f5RDSoPgQf1hJ48d90Yk6rbYvrvP7e2l'; // Escribir después de la url y el "?"" sign

const baseGifsURL = 'http://api.giphy.com/v1/gifs/random?api_key=';
const baseStikersURL = 'http://api.giphy.com/v1/stickers/random?api_key=';

const peticion = fetch(`${baseGifsURL}${apiKey}`);

peticion
	.then((resp) => {
		return resp.json(); // Por surte las promesas pueden encadenarse 😀
	})
	.then((data) => console.log(data))
	.catch((err) => console.warn(err));
