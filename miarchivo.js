

/* Tienda online de productor de bazar */

alert("Bienvenidos a Tienda Objeto")


let opciones

let comboCocina = 5000
let comboIluminacion = 10000
let comboLibreria = 2500
let comboElectro = 20000
let comboBeauty = 4000


do {
    opciones = parseInt(prompt("Ingrese la opción del producto que desea comprar:\n 1. Combo de Cocina \n 2. Combo de Iluminación \n 3. Combo de Librería \n 4. Combo de Electronica \n 5. Combo de Beauty \n 0. Salir"))

    if (opciones === 1) {
        alert("Debe pagar $" + comboCocina)
    } else if (opciones === 2) {
        alert("Debe pagar $" + comboIluminacion)
    } else if (opciones === 3) {
        alert("Debe pagar $" + comboLibreria)
    } else if (opciones === 4) {
        alert("Debe pagar $" + comboElectro)
    } else if (opciones === 5) {
        alert("Debe pagar $" + comboBeauty)
    } else if (opciones !== 0) {
        alert("Por favor ingrese un valor válido")
    } else{
        alert("Muchas gracias por su visita")
    }

} while (opciones !== 0);
