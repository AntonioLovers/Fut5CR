const express = require ('express');
const router = express.Router();

const usuario = require('../controllers/Usuarios.controller');

// Obtener todos los usuarios
router.get('/', usuario.getAllUsuario);
// Crear un usuario (Registro)
router.post('/', usuario.createUsuario);
//Obtener un usuario
router.get('/:id', usuario.getUsuario);
//Editar un usuario
router.put('/:id', usuario.editUsuario);
//Eliminar un usuario
router.delete('/:id', usuario.elimUsuario);



module.exports=router;