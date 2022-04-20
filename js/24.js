/** Eventos del DOM - Clicks

const heading = document.querySelector('.heading');*/
/*heading.addEventListener('click', function() clickHeading); // puede ser una funcion o un arrow function o una funcion por separado
    
function clickHeading() { //Con una funcion por separado // con function expresion NO funciona
    console.log('diste click en el heading')
}
*/
const heading = document.querySelector('.heading'); // Callback
heading.addEventListener('click', () => {
    heading.textContent = 'Nuevo Heading al dar click'
});

const enlaces = document.querySelectorAll('.navegacion a'); // con querySelectorAll se requeire iterar para poder usar addEventLisatener
// para poder asociar un evento
enlaces.forEach( enlace => {// la variable temporal se llama enlace, se agrega en el arrow function y antes del addEventLisatener
    enlace.addEventListener('click', () => { 
        console.log('Diste click en un enlace')
    })
})














