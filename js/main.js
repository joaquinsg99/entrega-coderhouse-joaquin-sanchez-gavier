//! array de productos 
const productos = [
    { id:"cerveza",
    titulo: "cerveza",
    imagen: "https://media.tada.com.ar/produc_variant/00001872_e3c47f21-781c-4e55-9956-6ea13d56c7c9.jpg",
    categoria: {
        id: "cerveza"
    },
    precio: 1000
    }, 
    { id:"vino",
    titulo: "vino",
    imagen: "https://media.tada.com.ar/produc_variant/00001872_e3c47f21-781c-4e55-9956-6ea13d56c7c9.jpg",
    categoria: {
        id: "vino"
    },
    precio: 2000
    }, 
    { id:"gin",
    titulo: "gin",
    imagen: "https://media.tada.com.ar/produc_variant/00001872_e3c47f21-781c-4e55-9956-6ea13d56c7c9.jpg",
    categoria: {
        id: "gin"
    },
    precio: 20000
    }, 
    { id:"fernet",
    titulo: "fernet",
    imagen: "https://media.tada.com.ar/produc_variant/00001872_e3c47f21-781c-4e55-9956-6ea13d56c7c9.jpg",
    categoria: {
        id: "fernet"
    },
    precio: 7000
    }, 
]

let usuario;
//! loop para saber que bebida
do{
   usuario = prompt("Ingrese su nombre");
} while (usuario === "");

let edad = prompt("Ingrese su edad")

if ( edad >=  18) {
let bebida = prompt("¿Qué productos queres comprar? Puedes elegir entre vino, cerveza, gin y fernet");

let cantidadProductos= prompt("¿Cuantas unidades queres comprar?");

//! funcion para calcular los precios de cada producto
function calcularPrecio(nombre, cantidad) {
    let user = productos.find(producto => producto.id === nombre);
    alert(`hola ${usuario} acabas de comprar ${cantidadProductos}  ${user.titulo} (${user.precio} x unidad) al precio total de $ ${user.precio * cantidad}.`);
}

//! llamado a la funcion
calcularPrecio(bebida, cantidadProductos)

} else {
    alert("Eres menor de edad, No puedes realizar la compra.")
}
