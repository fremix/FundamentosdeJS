/** Fetch API - Async Await */

const url = "https://jsonplaceholder.typicode.com/comments";

/*
const consultarAPI1 = () => {
    fetch(url)
    .then ( respuesta => respuesta.json())
    .then ( resultado => {
        resultado.forEach( comentario => {
            console.log(comentario);
        });
    })
};*/


const consultarAPI = async () => {
    const respuesta = await fetch(url)
    //console.log(respuesta);
    //console.log('Despues de respuesta...')
    const resultado = await respuesta.json()
    //console.log('Despues de resultado...');
    };
consultarAPI();


