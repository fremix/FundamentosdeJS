/** template Strings */

const producto = 'Tablet de 12 pulgadas',
      precio = 400,
      marca = 'Orange';
    
function textoTemplateStrings() {
    return 'Este texto viene de la funcion'
};

      console.log(`El precio de la ${producto} es de: $${precio} pesos marca: ${marca}, ${textoTemplateStrings()} `);

