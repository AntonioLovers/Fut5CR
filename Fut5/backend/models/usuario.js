const mongoose = require ('mongoose');
const {Schema} = mongoose;

const UsuarioScheme = new Schema({
    nombre:{type: String, required:true},
    apellido:{type: String, required:true},
    edad:{type: Number, required: true},
    experiencia:{type: String, required:true},
    pie:{type: String, required:true},
    provincia:{type: String, required:true},
    canton:{type: String, required:true}
});

module.exports = mongoose.model('Usuario', UsuarioScheme);