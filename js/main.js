// array de productos 
let productos = [];

// Cargar los productos desde el archivo JSON
fetch('productos.json')
    .then(response => response.json())
    .then(data => {
        productos = data;
        mostrarProductos(productos);
        configurarBotonesCategoria();
    });

function mostrarProductos(arrayObjetos) {
    let contenedor = document.querySelector(".contenedor-productos");
    let productosHTML = "";
    for (const product of arrayObjetos) {
        productosHTML += `
            <div class="producto" id=${product.categoria}>
                <img class="producto-imagen" src=${product.imagen} alt=${product.titulo}>
                <h3>${product.titulo}</h3>
                <p>$ ${product.precio}</p>
                <button class="agregar-carrito" data-id=${product.id}>Agregar Carrito</button>
            </div>`;
    }
    contenedor.innerHTML = productosHTML;

    document.querySelectorAll('.agregar-carrito').forEach(btn => {
        btn.addEventListener('click', () => {
            const productoID = btn.getAttribute('data-id');
            agregarAlCarrito(productoID);
        });
    });
}

function configurarBotonesCategoria() {
    let botonCategoria = document.querySelectorAll(".boton-categoria");

    botonCategoria.forEach(boton => {
        boton.addEventListener("click", (e) => {
            if (e.currentTarget.id != "todos" && "carritoIcono") {
                const productosBoton = productos.filter(producto => producto.categoria === e.currentTarget.id);
                mostrarProductos(productosBoton);
            } else {
                mostrarProductos(productos);
            }
        })
    });
}

function agregarAlCarrito(productoID) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const products = productos.find(product => product.id === productoID);
    const productosEnCarrito = carrito.find(p => p.id === productoID);
    if (productosEnCarrito) {
        productosEnCarrito.cantidad++;
        productosEnCarrito.totalPrice = productosEnCarrito.cantidad * productosEnCarrito.precio;
    } else {
        carrito.push({
            id: productoID,
            nombre: products.titulo,
            precio: products.precio,
            cantidad: 1,
            totalPrice: products.precio
        });
    }
    localStorage.setItem('carrito', JSON.stringify(carrito));
    setTimeout(() => {
        mostrarCarrito();
    }, 700);
}

function mostrarCarrito() {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let contenedorCarrito = document.querySelector("#contenedor-carro");
    let totalAgrupado = document.querySelector("#comprar-seccion");
    let carritoHTML = "";
    if (carrito.length === 0) {
        contenedorCarrito.innerHTML = '<h3> Tu carrito está vacío</h3>';
        totalAgrupado.innerHTML = '';
        totalAgrupado.classList.add("ocultar");
        return;
    }
    for (const p of carrito) {
        carritoHTML += `
            <div class="carrito-comprar" id=${p.id}>
                <h3>${p.nombre}</h3>
                <div class="botonesSumEl">
                    <p>Cantidad: ${p.cantidad}</p>
                </div>
                <p>Precio: $ ${p.precio}</p>
                <p>Total: $ ${p.totalPrice}</p>
                <button class="eliminar-carrito" data-id=${p.id}>Eliminar</button>
            </div>`;
    }
    contenedorCarrito.innerHTML = carritoHTML;

    document.querySelectorAll(".eliminar-carrito").forEach(btn => {
        btn.addEventListener("click", () => {
            let btnDelete = btn.getAttribute("data-id");
            eliminarDelCarrito(btnDelete);
        });
    });
    let totalCarrito = carrito.reduce((acc, p) => acc + p.totalPrice, 0);

    totalAgrupado.innerHTML = `
        <h3 class="total">Total: $ ${totalCarrito}</h3>
        <button class="btn-compra">Comprar</button>`;
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
    });

    totalAgrupado.classList.remove("ocultar");
}

function eliminarDelCarrito(deleteID) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const nuevoCarrito = carrito.filter(p => p.id !== deleteID);
    localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
    mostrarCarrito();
}