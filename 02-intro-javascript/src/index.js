const apiKey = 'f5RDSoPgQf1hJ48d90Yk6rbYvrvP7e2l'; // Escribir después de la url y el "?"" sign

const baseGifsURL = 'http://api.giphy.com/v1/gifs/random?api_key=';
const baseStikersURL = 'http://api.giphy.com/v1/stickers/random?api_key=';

const peticion = fetch(`${baseGifsURL}${apiKey}`);

peticion
	.then((resp) => {
        resp.json().then((data) => console.log(data));
        // Con esta líne ya puedo acceder a la data, pero
        // el metodo json me regresa otra promessa por lo que hacemos uso de otro then
        // y se ve feo
	})
	.catch((err) => console.warn(err));
