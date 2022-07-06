const {Schema, model} = require('mongoose');

const loginSchema = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    nombre: { type: String, required: true },
    apellidos: { type: String, required: true },
});

module.exports = model('Login', loginSchema);