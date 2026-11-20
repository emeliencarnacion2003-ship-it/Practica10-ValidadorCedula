
function validarCedula(cedula) {

    // 1. Comprobar que tenga exactamente 11 dígitos
    if (!/^\d{11}$/.test(cedula)) {
        return false;
    }

    // 2. Separar los primeros 10 dígitos
    const digitos = cedula.substring(0, 10);

    // 3. Obtener el último dígito (verificador)
    const digitoVerificador = Number(cedula[10]);

    let suma = 0;

    // 4. Recorrer los primeros 10 dígitos
    for (let i = 0; i < digitos.length; i++) {

        let numero = Number(digitos[i]);

        // Multiplicar alternadamente por 1 y 2
        let multiplicador = (i % 2 === 0) ? 1 : 2;

        let resultado = numero * multiplicador;

        // Si el resultado tiene dos cifras, sumar sus cifras
        if (resultado > 9) {
            resultado = Math.floor(resultado / 10) +
                        (resultado % 10);
        }

        suma += resultado;
    }

    // 5. Calcular el dígito verificador esperado
    const digitoCalculado = (10 - (suma % 10)) % 10;

    // 6. Comparar los dígitos verificadores
    return digitoCalculado === digitoVerificador;
}

// Exportar la función para utilizarla en otros archivos
module.exports = {
    validarCedula
};
