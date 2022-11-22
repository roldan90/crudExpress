const { Schema, model } = require("mongoose");

const Contacto = Schema({
    nombre: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    telefono: {
        type: String,
        required: true,
    }
});

module.exports = model("Contacto", Contacto);

