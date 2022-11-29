

/* Tienda online de productos de bazar */

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
