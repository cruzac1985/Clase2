
//Ejercicio 1
function suma(a, b, callback) {
    let c = a + b;
    callback();
}

// Ejemplo de función callback
function callback() {
    console.log("La suma se ha completado.");
}

// Llamado a la función suma
suma(5, 3, callback);

//Ejercicio 2
    const operando1 = document.getElementById("operando1");
    const operando2 = document.getElementById("operando2");
    const resultado = document.getElementById("resultado");

    const realizarOperacion = (operador) => {
    const num1 = parseFloat(operando1.value);
    const num2 = parseFloat(operando2.value);

        if (isNaN(num1) || isNaN(num2)) {
            resultado.textContent = "Error: Ingrese números válidos.";
            return;
        }

        switch (operador) {
            case '+':
                resultado.textContent = num1 + num2;
                break;
            case '-':
                resultado.textContent = num1 - num2;
                break;
            case '*':
                resultado.textContent = num1 * num2;
                break;
                case '/':

        if (num2 === 0) {
            resultado.textContent = "Error: División por cero.";
        } else {
            resultado.textContent = num1 / num2;
        }
            break;
            default:
            resultado.textContent = "Operador no válido";
            }
        };