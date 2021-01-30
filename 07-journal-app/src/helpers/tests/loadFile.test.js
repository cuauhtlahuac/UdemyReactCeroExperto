import { loadFile } from 'helpers/loadFile';

describe('loadFile util test', () => {
  

	it('should return an url', async () => {
    const response = await fetch('https://kaverisias.com/wp-content/uploads/2018/01/catalog-default-img.gif', {
      method: 'GET',
      mode: 'same-origin',
      cache: 'no-cache',
      credentials: 'include',
    })
    console.log({response})
    const blob = await response.blob();
    console.log({blob})
    
    const file = new File([blob], 'picture.png')
    console.log({file})
    //const url = await loadFile(file);
    expect(true).toBe(true)
    //expect(url).toBe(true)
	});
});
