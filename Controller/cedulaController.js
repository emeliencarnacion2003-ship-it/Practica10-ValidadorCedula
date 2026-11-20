
const Cedula = require('../Model/cedulaModel');

const validar = (req, res) => {

    // Recibir la cédula enviada por el usuario
    const { cedula } = req.body;

    // Comprobar que se haya enviado una cédula
    if (!cedula) {
        return res.status(400).json({
            mensaje: 'Debe ingresar una cédula.'
        });
    }

    // Comprobar que tenga exactamente 11 dígitos
    if (!/^\d{11}$/.test(cedula)) {
        return res.status(400).json({
            mensaje: 'La cédula debe contener exactamente 11 dígitos numéricos.'
        });
    }

    // Solicitar al Model que valide la cédula
    const esValida = Cedula.validarCedula(cedula);

    // Devolver el resultado
    if (esValida) {
        return res.status(200).json({
            valida: true,
            mensaje: 'La cédula es válida según el algoritmo módulo 10.'
        });
    }

    return res.status(200).json({
        valida: false,
        mensaje: 'La cédula es inválida según el algoritmo módulo 10.'
    });
};

module.exports = {
    validar
};
