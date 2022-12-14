

/* Tienda online de productos de bazar */

/* array de productos */

fetch("./productos.json")
    .then(respuesta => respuesta.json())
    .then(data => {
        miPrograma(data)
    })

function miPrograma(productos) {

    const shopContainer = document.getElementById("shopContainer");
    const verCarrito = document.getElementById("verCarrito");
    const modalContainer = document.getElementById("modalContainer");
    const cantidadCarrito = document.getElementById("cantidadCarrito");

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    const dibujarProductos = (filter = false) => {
        shopContainer.innerHTML = "";

        let productosAFiltrar;
        if (filter) {
            productosAFiltrar = productos.filter((p => p.nombre.toLowerCase().includes(filter.toLowerCase())));
        } else {
            productosAFiltrar = productos;
        }
        productosAFiltrar.forEach((product) => {
            let content = document.createElement("div");
            content.className = "card";
            content.innerHTML = `
      <img src=${product.img}>
      <h3>${product.nombre}</h3>
      <p class="price">$${product.precio}</p>
      `;

            shopContainer.append(content);

            let comprar = document.createElement("button");
            comprar.className = "comprar";
            comprar.innerText = "comprar";

            content.append(comprar);

            comprar.addEventListener("click", () => {
                const repeat = carrito.some(
                    (repeatProduct) => repeatProduct.id === product.id
                );

                if (repeat) {
                    carrito.map((prod) => {
                        if (prod.id === product.id) {
                            prod.cantidad++;
                        }
                    });
                } else {
                    carrito.push({
                        id: product.id,
                        nombre: product.nombre,
                        img: product.img,
                        precio: product.precio,
                        cantidad: product.cantidad,
                    });
                }

                console.log(carrito);
                console.log(carrito.length);

                Swal.fire({
                    title: 'Producto agregado al carrito',
                    icon: 'success',
                    confirmButtonText: 'Continuar',
                    color: '#90a9b0',
                    confirmButtonColor: '#e1d0d1',
                })

                carritoCounter();
                saveLocalStorage();
            });
        });
    };

    dibujarProductos();

    function funcionFiltrado() {
        var nombreProducto = document.getElementById("nombreProducto");
        console.log(nombreProducto.value);
        dibujarProductos(nombreProducto.value);
    }

    /* set item */

    const saveLocalStorage = () => {
        localStorage.setItem("carrito", JSON.stringify(carrito));
    };

    /* get item */

    JSON.parse(localStorage.getItem("carrito"));

    /* mi carrito */

    const pintarCarrito = () => {

        modalContainer.innerHTML = " ";
        modalContainer.style.display = "flex";
        const modalHeader = document.createElement("div");
        modalHeader.className = "modal-header";
        modalHeader.innerHTML = `
    <h2 class="modal-header-title">Carrito de Compras</h2>
    `;
        modalContainer.append(modalHeader);

        const modalButton = document.createElement("p");
        modalButton.innerText = "Cerrar";
        modalButton.className = "modal-header-button";

        modalButton.addEventListener("click", () => {
            modalContainer.style.display = "none";
        });

        modalHeader.append(modalButton);


        carrito.forEach((product) => {
            let carritoContent = document.createElement("div");
            carritoContent.className = "modal-content";
            carritoContent.innerHTML = `
    <img src=${product.img}>
    <h3>${product.nombre}</h3>
    <p>$${product.precio}</p>
    <span class="restar"> - </span>
    <p>Cantidad: ${product.cantidad}</p>
    <span class="sumar"> + </span>
    <p>Total: ${product.cantidad * product.precio}</p>
    <span class="delete-product"> ❌ </span>

    `;

            modalContainer.append(carritoContent);

            let restar = carritoContent.querySelector(".restar");

            restar.addEventListener("click", () => {

                if (product.cantidad !== 1) {
                    product.cantidad--;
                }

                Toastify({
                    text: "Eliminaste un producto",
                    className: "info",
                    style: {
                        background: "#e1d0d1",
                    }
                }).showToast();

                saveLocalStorage();
                pintarCarrito();
            });

            let sumar = carritoContent.querySelector(".sumar");

            sumar.addEventListener("click", () => {

                product.cantidad++;


                Toastify({
                    text: "Agregaste un producto",
                    className: "info",
                    style: {
                        background: "#e1d0d1",
                    }
                }).showToast();

                saveLocalStorage();
                pintarCarrito();
            });

            let eliminar = carritoContent.querySelector(".delete-product");

            eliminar.addEventListener("click", () => {
                eliminarProducto(product.id);
            });

        });

        const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

        const totalCompra = document.createElement("div");
        totalCompra.className = "total-content";
        totalCompra.innerHTML = `Total a pagar: $${total}`;
        modalContainer.append(totalCompra);

    };

    verCarrito.addEventListener("click", pintarCarrito);

    const eliminarProducto = (id) => {

        const foundId = carrito.find((element) => element.id === id);

        console.log(foundId);

        carrito = carrito.filter((carritoId) => {
            return carritoId !== foundId;
        });

        carritoCounter();
        saveLocalStorage();
        pintarCarrito();
    };

    const carritoCounter = () => {
        cantidadCarrito.style.display = "block";

        const carritoLength = carrito.length;

        localStorage.setItem("carritoLength", JSON.stringify(carritoLength));

        cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
    };

    carritoCounter();

}
