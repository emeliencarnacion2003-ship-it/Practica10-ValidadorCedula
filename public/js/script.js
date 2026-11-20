
const form = document.getElementById('formCedula');
const input = document.getElementById('cedula');
const resultado = document.getElementById('resultado');

form.addEventListener('submit', async (event) => {

    // Evitar que la página se recargue
    event.preventDefault();

    const cedula = input.value.trim();

    // Limpiar el resultado anterior
    resultado.textContent = 'Validando...';
    resultado.className = 'resultado';

    try {

        // Enviar la cédula al servicio web
        const response = await fetch('/api/validar', {
            method: 'POST',

            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({ cedula })
        });

        // Recibir la respuesta del servidor
        const data = await response.json();

        // Mostrar el resultado
        resultado.textContent = data.mensaje;

        if (response.ok && data.valida === true) {
            resultado.className = 'resultado valido';
        } else {
            resultado.className = 'resultado invalido';
        }

    } catch (error) {

        resultado.textContent =
            'No se pudo conectar con el servicio web.';

        resultado.className = 'resultado invalido';

        console.error('Error:', error);
    }
});
