import { getImagen } from "base-pruebas/11-async-await"

describe('Testing async await function', () => {
    test('should return an image url', async () => {
        
        const url = await getImagen();

        expect(url.includes("https://")).toBe(true)
    })   
})
