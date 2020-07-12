const promesa = new Promise((res, rej) => {
    console.log('La promesa inicia');
    
	setTimeout(() => {
        
		res('2'); // aquí le pasamos el argumento
	}, 2000);
});

promesa.then((response) => {
	console.log(`Then la promesa ${response} segundos después`);
});
