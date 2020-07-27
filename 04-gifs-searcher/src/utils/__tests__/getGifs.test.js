import { getGifs } from "utils/getGifs";

describe('getGifs Tests', () => {

    test('should get at least 20 items', async() => {
            
        const gifs = await getGifs('Muppets');
        
        expect( gifs.length ).toBe(20);
    })
    
    test('should get an empty array', async() => {
        
        const noGifs = await getGifs('');

        expect( noGifs.length ).toBe(0)
        
    }) 
})
