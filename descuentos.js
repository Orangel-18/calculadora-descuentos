function calcularPrecio(precio, descuento) {
    const factor = (100 - descuento) / 100;
    return (precio * factor);
}

function precioConDescuento() {
    const inputPrecio = document.getElementById("precio").value;
    const inputDescuento = document.getElementById("descuento").value;

    const precio = inputPrecio;
    const descuento = inputDescuento;

    const porPagar = calcularPrecio(precio, descuento);

    const result = document.getElementById("result");

    result.innerText = `El total a pagar es de $ ${porPagar}`;
}