// const getImagePromise = () => new Promise(resolve => resolve("http://osjsjisijis.com"));
// getImagePromise().then(console.log)
// Async Await

// Async ya me regresa una promesa
const getImagePromise = async () => {
	const apiKey = 'f5RDSoPgQf1hJ48d90Yk6rbYvrvP7e2l';
	const baseStikersURL = 'http://api.giphy.com/v1/stickers/random?api_key=';
    console.log('before data');
	// El await le dice, espera a que se ejecute esta línea de código antes de que se ejecute la siguiente
	const resp = await fetch(`${baseStikersURL}${apiKey}`);
    console.log('getting data:', resp);
    // resp es una promesa, para obtener la data debemos parsearla con un json pero este metodo regresa una promesa
    // debemos esperar a que esta promesa se parsee
	const { data } = await resp.json();
	console.log({ data });
	const { url } = data.images.original;
	// Creamos el elemento html
	const img = document.createElement('img');
	img.src = url;
	document.body.append(img);

	return img;
};

getImagePromise();
