class Productos {
    constructor(nombre, stock, precio){
        this.nombre = nombre;
        this.stock = stock;
        this.precio = precio;
    }
}; 

const vino = new Productos("Vino", 10, 2000);
const cerveza = new Productos("Cerveza", 10, 1000);
const gin = new Productos("Gin", 10, 20000);
const fernet = new Productos("Fernet", 10, 7000);

function calculadorEntradas(cantidad, precio) {
    return cantidad * precio;
};

let usuario;
do{
   usuario = prompt("Ingrese su nombre");
} while (usuario === "");

let edad = prompt("Ingrese su edad")

if ( edad >=  18) {
let bebida = prompt("¿Qué productos queres comprar? Puedes elegir entre vino, cerveza, gin y fernet");

let cantidadProductos= prompt("¿Cuantas unidades queres comprar?");


switch(bebida.toLocaleLowerCase()) {
    case "vino" :
        alert("El monto total por el/los vinos" +" ("+ cantidadProductos + " unidad/es" + ") " + "es de $"+ calculadorEntradas(cantidadProductos, 2000) +  ". Muchas gracias " + usuario.toUpperCase() + " por su compra.")
    break
    case "cerveza" :
        alert("El monto total por la/s cerveza/s" +" ("+ cantidadProductos + " unidad/es" + ") " + "es de $"+ calculadorEntradas(cantidadProductos, 1000) +  ". Muchas gracias " + usuario.toUpperCase() + " por su compra.")
    break
    case "gin" :
        alert("El monto total por el/los gin/es" +" ("+ cantidadProductos + " unidad/es" + ") " + "es de $"+ calculadorEntradas(cantidadProductos, 20000) +  ". Muchas gracias " + usuario.toUpperCase() + " por su compra.")
    break
    case "fernet" :
        alert("El monto total por el/los fernet" +" ("+ cantidadProductos + " unidad7es" + ") " + "es de $"+ calculadorEntradas(cantidadProductos, 7000) +  ". Muchas gracias " + usuario.toUpperCase() + " por su compra.")
    break
} 

} else {
    alert("Eres menor de edad, No puedes realizar la compra.")
}
