import { getImagePromise } from 'js-bases/11-AsyncAwait';

export default function main() {
	const numGifs = 3;

	const playGifs = numGifs <= 10 && true;

	if (playGifs) {
		for (let index = 0; index < numGifs; index++) {
			getImagePromise();
		}
	}
}

main();
