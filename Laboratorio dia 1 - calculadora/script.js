// 📌 Selección de elementos del DOM
const numero1 = document.getElementById("numero1");
const numero2 = document.getElementById("numero2");
const sumarBtn = document.getElementById("sumar");
const restarBtn = document.getElementById("restar");
const multiplicarBtn = document.getElementById("multiplicar");
const dividirBtn = document.getElementById("dividir");
const resultado = document.getElementById("resultado");

// 📌 Función para validar entradas de usuario
function validarInputs() {
    if (isNaN(parseFloat(numero1.value)) || isNaN(parseFloat(numero2.value))) {
        resultado.textContent = "❌ Error: Ingresa números válidos.";
        return false;
    }
    return true;
}

// 📌 Función para sumar dos números
function sumar() {
    if (!validarInputs()) return;
    const suma = parseFloat(numero1.value) + parseFloat(numero2.value);
    resultado.textContent = `✅ Resultado: ${suma}`;
}

// 📌 Función para restar dos números
function restar() {
    if (!validarInputs()) return;
    const resta = parseFloat(numero1.value) - parseFloat(numero2.value);
    resultado.textContent = `✅ Resultado: ${resta}`;
}

// 📌 Función para multiplicar dos números
function multiplicar() {
    if (!validarInputs()) return;
    const producto = parseFloat(numero1.value) * parseFloat(numero2.value);
    resultado.textContent = `✅ Resultado: ${producto}`;
}

// 📌 Función para dividir dos números (maneja la división por 0)
function dividir() {
    if (!validarInputs()) return;
    const divisor = parseFloat(numero2.value);
    if (divisor === 0) {
        resultado.textContent = "❌ Error: No se puede dividir por cero.";
        return;
    }
    const cociente = parseFloat(numero1.value) / divisor;
    resultado.textContent = `✅ Resultado: ${cociente}`;
}

// 📌 Agregar eventos a los botones
sumarBtn.addEventListener("click", sumar);
restarBtn.addEventListener("click", restar);
multiplicarBtn.addEventListener("click", multiplicar);
dividirBtn.addEventListener("click", dividir);
