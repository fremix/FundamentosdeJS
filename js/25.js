/** Eventos del DOM - Inputs */

const inputNombre = document.querySelector('.nombre')
inputNombre.addEventListener('input', (e) => {
    console.log(e.target.value); // callback - Es donde estamos escribiendo, con el target tenemos acceso al value y nos dice que es lo que el usuario escribe 
});

//inputNombre.type = 'password'
 /** */

const inputPassword = document.querySelector('.password');
inputPassword.addEventListener('input', functionPassword);
/** Para manipular el input segun el usuario vaya escribiendo */
function functionPassword() {
    inputPassword.type = 'text'
/** oculta el password de acuerdo al tiempo establecido */
    setTimeout(() => {
        inputPassword.type = 'password'
    }, 100);
    
}







