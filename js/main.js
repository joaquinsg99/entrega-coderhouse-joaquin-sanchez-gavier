//! array de productos 
const productos = [
    { 
        id: "1",
        titulo: "Schneider 1l ret",
        imagen: "https://jumboargentina.vtexassets.com/arquivos/ids/801633-800-auto?v=638373335144800000&width=800&height=auto&aspect=true",
        categoria: "cerveza" ,
        precio: 2450 ,
        cantidad: 0
    }, 
    { 
        id: "2",
        titulo: "Andes Roja 1l ret",
        imagen: "https://jumboargentina.vtexassets.com/arquivos/ids/588505-800-auto?v=637280468187130000&width=800&height=auto&aspect=true",
        categoria: "cerveza" ,
        precio: 2850 ,
        cantidad: 0
    }, 
    { 
        id: "3",
        titulo: "Quilmes Clásica 1l ret",
        imagen: "https://jumboargentina.vtexassets.com/arquivos/ids/588362-800-auto?v=637280467092070000&width=800&height=auto&aspect=true",
        categoria: "cerveza" ,
        precio: 2378 ,
        cantidad: 0
    }, 
    { 
        id: "4",
        titulo: "Andes Origen Rubia 1l ret",
        imagen: "https://jumboargentina.vtexassets.com/arquivos/ids/588506-800-auto?v=637280468189300000&width=800&height=auto&aspect=true",
        categoria: "cerveza" ,
        precio: 3002 ,
        cantidad: 0
    },
    { 
        id: "5",
        titulo: "Andes Ipa 1l ret",
        imagen: "https://jumboargentina.vtexassets.com/arquivos/ids/588560-800-auto?v=637280468364330000&width=800&height=auto&aspect=true",
        categoria: "cerveza" ,
        precio: 3002 ,
        cantidad: 0
    },
    { 
        id: "6",
        titulo: "Cordero con piel de lobo",
        imagen: "https://jumboargentina.vtexassets.com/arquivos/ids/795399-800-auto?v=638309290250400000&width=800&height=auto&aspect=true",
        categoria: "vino" ,
        precio: 4850 ,
        cantidad: 0
    },
    { 
        id: "7",
        titulo: "Perro callejero",
        imagen: "https://jumboargentina.vtexassets.com/arquivos/ids/795405-800-auto?v=638309290270900000&width=800&height=auto&aspect=true",
        categoria: "vino" ,
        precio: 6900 ,
        cantidad: 0
    },
    { 
        id: "8",
        titulo: "Trapiche",
        imagen: "https://jumboargentina.vtexassets.com/arquivos/ids/581181-800-auto?v=637225176719970000&width=800&height=auto&aspect=true",
        categoria: "vino" ,
        precio: 7825 ,
        cantidad: 0
    },
    { 
        id: "9",
        titulo: "Alfa crux",
        imagen: "https://jumboargentina.vtexassets.com/arquivos/ids/713455-800-auto?v=637951377929170000&width=800&height=auto&aspect=true",
        categoria: "vino" ,
        precio: 25805 ,
        cantidad: 0
    },
    { 
        id: "10",
        titulo: "Estate",
        imagen: "https://jumboargentina.vtexassets.com/arquivos/ids/624752-800-auto?v=637510296807200000&width=800&height=auto&aspect=true",
        categoria: "vino" ,
        precio: 4950 ,
        cantidad: 0
    },
    { 
        id: "11",
        titulo: "Bulldog",
        imagen: "https://jumboargentina.vtexassets.com/arquivos/ids/799810-800-auto?v=638348926878930000&width=800&height=auto&aspect=true",
        categoria: "bebida blanca" ,
        precio: 36800 ,
        cantidad: 0
    },
    { 
        id: "12",
        titulo: "Vodka Smirnoff",
        imagen: "https://jumboargentina.vtexassets.com/arquivos/ids/791053-800-auto?v=638283369828400000&width=800&height=auto&aspect=true",
        categoria: "bebida blanca",
        precio: 7400 ,
        cantidad: 0
    },
    { 
        id:"13",
        titulo: "Gin Tanqueray",
        imagen: "https://jumboargentina.vtexassets.com/arquivos/ids/791072-800-auto?v=638283369909900000&width=800&height=auto&aspect=true",
        categoria: "bebida blanca" ,
        precio: 35650 ,
        cantidad: 0
    },
    { 
        id:"14",
        titulo: "Gin heredero",
        imagen: "https://jumboargentina.vtexassets.com/arquivos/ids/709341-800-auto?v=637926322129900000&width=800&height=auto&aspect=true",
        categoria: "bebida blanca" ,
        precio: 12950 ,
        cantidad: 0
    },
    { 
        id: "15",
        titulo: "Ron Havana Club",
        imagen: "https://jumboargentina.vtexassets.com/arquivos/ids/818442-800-auto?v=638483818944600000&width=800&height=auto&aspect=true",
        categoria: "bebida blanca" ,
        precio: 36650 ,
        cantidad: 0
    }
]
mostrarProductos(productos)
mostrarCarrito()

//! mostrando los productos con JS

 function mostrarProductos(arrayObjetos) {
 let contenedor = document.querySelector(".contenedor-productos");
 let productosHTML = "";
    for(const product of arrayObjetos){
        productosHTML += `
                <div class="producto" id=${product.categoria} >
                <img class="producto-imagen" src=${product.imagen} alt=${product.titulo}>
                <h3>${product.titulo}</h3>
                <p>$ ${product.precio}</p>
                <button class="agregar-carrito" data-id=${product.id}>Agregar Carrito</button>
                </div>`
    }
     contenedor.innerHTML = productosHTML;
    
     document.querySelectorAll('.agregar-carrito').forEach(btn => {
        btn.addEventListener('click', () => {
            const productoID = btn.getAttribute('data-id');
            agregarAlCarrito(productoID);
            });
    });    
} 

//!agregando funcionalidad a la navbar

let botonCategoria = document.querySelectorAll(".boton-categoria");


botonCategoria.forEach(boton => {
    boton.addEventListener("click", (e) => {
        if(e.currentTarget.id != "todos" && "carritoIcono"){
              const productosBoton = productos.filter(producto => producto.categoria === e.currentTarget.id)
              mostrarProductos(productosBoton)
        } else {
              mostrarProductos(productos)
        }
    })
});

//!agregando la funcion agregar al carrito

function agregarAlCarrito (productoID) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const products = productos.find(product => product.id === productoID);
    const productosEnCarrito = carrito.find(p => p.id === productoID);
    if(productosEnCarrito){  
        productosEnCarrito.cantidad ++
        productosEnCarrito.totalPrice = productosEnCarrito.cantidad * productosEnCarrito.precio
    } else {
        carrito.push(
            {
              id: productoID,
              nombre: products.titulo,
              precio: products.precio,
              cantidad: 1,
              totalPrice: products.precio 
              
            }
        )
        
    }
    localStorage.setItem('carrito', JSON.stringify(carrito));
   
    mostrarCarrito();
    
}
//!mostrando los productos en el carrito

function mostrarCarrito() {
    
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [] ;
    let contenedorCarrito =  document.querySelector("#contenedor-carro");
    let totalAgrupado =  document.querySelector("#comprar-seccion");
    let carritoHTML= "";
    if (carrito.length === 0) {
        contenedorCarrito.innerHTML = '<h3> Tu carrito está vacío</h3>';
        totalAgrupado.innerHTML = '';
        totalAgrupado.classList.add("ocultar");
        return;
    }
    for(const p of carrito){
        carritoHTML += `
                <div class="carrito-comprar" id=${p.id}>
                <h3>${p.nombre}</h3>
                <div class="botonesSumEl">
                <p>Cantidad: ${p.cantidad}</p>
                </div>    
                <p>Precio: $ ${p.precio}</p>
                <p>Total : $ ${p.totalPrice}</p>
                <button class="eliminar-carrito" data-id=${p.id}>Eliminar</button>
                </div>`;
    }
    contenedorCarrito.innerHTML = carritoHTML;

    document.querySelectorAll(".eliminar-carrito").forEach(btn => {
              btn.addEventListener("click", () => {
              let btnDelete = btn.getAttribute("data-id")
              eliminarDelCarrito(btnDelete)
              
        })
    });
    let totalCarrito = carrito.reduce((acc, p) => acc + p.totalPrice, 0);
    
    totalAgrupado.innerHTML = `
                <h3 class="total">Total: $ ${totalCarrito}</h3>
                <button class="btn-compra">Comprar</button>    
                    `; 
    let botonComprar = document.querySelector(".btn-compra");
    botonComprar.addEventListener("click", () => {
        Swal.fire({
            title: "¿Querés finalizar la compra?",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, quiero!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Muchas gracias por tu compra",
                icon: "success"
              });
              localStorage.setItem('carrito', JSON.stringify([]));
              mostrarCarrito();
            }
            
          });
    })
 


    totalAgrupado.classList.remove("ocultar");
                  
}

//! eliminando productos del carrito
 function eliminarDelCarrito(deleteID) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const nuevoCarrito = carrito.filter(p => p.id !== deleteID);
    localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
    mostrarCarrito()
}  



