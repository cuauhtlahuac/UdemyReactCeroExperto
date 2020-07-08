const persona = {
    nombre: "Tony",
    appelido: "Stark",
    edad: 45,
    direccion: {
        ciudad: "New York",
        zip: 5562626,
        lat: 14.3232,
        lng: 34.65656,
    }
};

const persona2 = { ...persona };
persona2.nombre = "Peter";

// Copiamos dos referencias diferentes
console.log( persona  )
console.log( persona2 )