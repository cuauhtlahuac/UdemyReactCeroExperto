const promesa = new Promise((res, rej) => {
    setTimeout(() => {
        console.log('2 seg después')
    }, 2000);
}) ;

promesa.then(()=>{
    console.log('Then la promesa')
})