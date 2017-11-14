//array de precios
var aDatos = [{precio : 22 },{precio : 34 },{precio : 57}];


//variable  iva
nIva = 1.22;
aDatos.forEach( elem => {
    precioFinal = elem.precio * nIva;
    console.log(
        `El precio final es: 
        ${precioFinal}`
    );
});