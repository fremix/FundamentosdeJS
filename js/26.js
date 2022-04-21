/** Eventos del DOM - Submit */

const formulario = document.querySelector('#formulario');
formulario.addEventListener('submit', e => {
    e.preventDefault() /** Se previene que se envie hacia el Action */

    /**
     * Ideal para realizar validacion con el formulario, cuando pasa ya se puede enviar al usuario a otra pagina
     * Ideal para realizar validaciones a la BD o inserciones
     */
    const nombre = document.querySelector('.nombre').value /** Al .value se le conoce como chaining */
    const password = document.querySelector('.password').value 

    if(nombre === '' || password === '') {
        console.log('Todos los campos son obligatorios');
    } else {
        console.log('Todo al 100, enviando...');
    }

    //console.log('Enviaste formulario')
});








