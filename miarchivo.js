

/* Tienda online de productos de bazar */

alert("Bienvenidos a Tienda Objeto")

let productos = [
    {
        id: 1,
        nombre: "Guantes de Silicona",
        precio: 1800,
        categoria: "Cocina"
    },
    {
        id: 11,
        nombre: "Escurridor Adaptable",
        precio: 1600,
        categoria: "Cocina"
    },
    {
        id: 21,
        nombre: "Botella de Frio-Calor",
        precio: 5400,
        categoria: "Cocina"
    },
    {
        id: 31,
        nombre: "Organizador de Cubiertos",
        precio: 1600,
        categoria: "Cocina"
    },
    {
        id: 41,
        nombre: "Set de Dispenser",
        precio: 1400,
        categoria: "Cocina"
    },
    {
        id: 2,
        nombre: "Guilnardas de Broche",
        precio: 3400,
        categoria: "Iluminación"
    },
    {
        id: 12,
        nombre: "Guilnardas de Foco",
        precio: 4100,
        categoria: "Iluminación"
    },
    {
        id: 22,
        nombre: "Humificador",
        precio: 4900,
        categoria: "Iluminación"
    },
    {
        id: 32,
        nombre: "Difusor Grande",
        precio: 7800,
        categoria: "Iluminación"
    },
    {
        id: 42,
        nombre: "Difusor Mediano",
        precio: 6200,
        categoria: "Iluminación"
    },
    {
        id: 3,
        nombre: "Organizador de Viaje",
        precio: 1850,
        categoria: "Organizadores"
    },
    {
        id: 13,
        nombre: "Organizador de Cartera",
        precio: 1250,
        categoria: "Organizadores"
    },
    {
        id: 23,
        nombre: "Organizador de Maquillajes",
        precio: 1610,
        categoria: "Organizadores"
    },
    {
        id: 33,
        nombre: "Portapasaporte",
        precio: 2500,
        categoria: "Organizadores"
    },
    {
        id: 4,
        nombre: "Cabina Led para uñas",
        precio: 5300,
        categoria: "Beauty"
    },
    {
        id: 14,
        nombre: "Torno Eléctrico de uñas",
        precio: 2750,
        categoria: "Beauty"
    },
    {
        id: 24,
        nombre: "Homespray Grande",
        precio: 1400,
        categoria: "Beauty"
    },
    {
        id: 34,
        nombre: "Homespray Mediano",
        precio: 800,
        categoria: "Beauty"
    },
]

const categorias = ["Cocina", "Iluminación", "Organizadores", "Beauty"]
const mensajeDeSalida = "\n\nEscriba 0 para volver"

function logicaDelPrograma() {

    // Filtro las categorias
    
    let mensajeCategorias = "Elija una categoria:\n"

    for (let categoria of categorias) {

        mensajeCategorias = mensajeCategorias + "\n" + categoria

    }

    categoriaElegida = prompt(mensajeCategorias)

    let mensaje = "Productos a elegir: (coloque el número que corresponda)\n"

    let productosPorCategoria = productos.filter(producto => producto.categoria.toLowerCase() === categoriaElegida.toLowerCase())

    if (productosPorCategoria.length > 0) {
        for (let productoPorCategoria of productosPorCategoria) {

            mensaje = mensaje + "\n" + productoPorCategoria.id + ". " + productoPorCategoria.nombre

        }

        mensaje = mensaje + mensajeDeSalida

        productoElegido = parseInt(prompt(mensaje))

        if (productoElegido > 0) {
            let resultado = productosPorCategoria.find(producto => producto.id === productoElegido)

            if (resultado) {
                alert(`El producto elegido es: ${resultado.nombre} y el precio es: $${resultado.precio.toLocaleString("en")}`)
            }
            else {
                alert("Producto no encontrado en esta categoría")
            }
        }
    } else {
        alert("Categoria no existente")
    }
}

do {

    logicaDelPrograma()

} while (true);


