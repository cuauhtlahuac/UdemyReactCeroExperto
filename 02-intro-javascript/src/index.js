// const https = require('https');
const http = require('http');

async function getCountryName(code) {

	function waitForMe() {
		return new Promise((res, rej) => {
			setTimeout(() => {
                console.log("Gracias por esperarme")
				res('Thank you');
			}, 2000);
		});
	}

	function dontWaitForMe() {
		return setTimeout(() => {
			console.log('que malos, no me esperaron');
		}, 2000);
	}

    await dontWaitForMe(); // este se ejecuta inmediatamente, si fuera asyncrono la próxima función
                          // se ejecutaría hasta que esta terminara 2 segundos después
	await waitForMe();

}

async function main() {
	const name = await getCountryName('AF');
	return name;
}
main();
