/** Manipular elementos HTML con JS */

const heading = document.querySelector('.heading')
heading.textContent = 'Un Nuevo Heading';
console.log(heading.textContent)

const inputNombre = document.querySelector('#nombre')
inputNombre.value = 'Escribe tu nombre aquí';


const enlaces = document.querySelectorAll('.navegacion a');
enlaces.forEach( enlace => enlace.textContent = 'Nuevos Enlaces1')
//enlaces.textContent = 'Nuevo Enlaces'; // No hace nada porque este textConten, NO esta disponible en una coleccion de querySelectorAll







