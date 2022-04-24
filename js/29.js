/** Fech API - El nuevo Ajax*/

const url = "https://jsonplaceholder.typicode.com/comments";

const consultarAPI = () => {
    fetch(url)
    .then( respuesta  => respuesta.json())
    //console.log(respuesta);
     
    .then( ( resultado ) => {
        //1.- console.log('Resultado casi listo...');
        //2.- console.log(resultado);
        resultado.forEach( comentario => { // Para recorrer la API se hace con un forEach y arrow function
            console.log(comentario);
        });
        console.warn('Fotos');
    });
}

consultarAPI();


const url1 = "https://jsonplaceholder.typicode.com/photos";

const consultarAPI1 = () => {
    fetch(url1)
    .then( respuesta1 => respuesta1.json())
    //console.log(respuesta)

    .then (( resultado1) => {
        resultado1.forEach( fotos => {
            console.log(fotos);
        });
        
    })
}

consultarAPI1();


