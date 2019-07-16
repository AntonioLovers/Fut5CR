const Usuario = require('../models/usuario');
const usuarioCtrl = {};


usuarioCtrl.getAllUsuario = async (req,res) => {
    const usuarios = await Usuario.find();
    res.json(usuarios);
}

usuarioCtrl.createUsuario = async (req, res) =>{
    const usuario = new Usuario(req.body);
    await usuario.save();
    res.json({
        'status': 'Usuario guardado'
    });

}

usuarioCtrl.getUsuario = async (req,res) => {
    const usuario = await Usuario.findById(req.params.id);
    res.json(usuario);

}

usuarioCtrl.editUsuario = async (req,res) => {
    const usuario = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        edad: req.body.edad,
        experiencia: req.body.experiencia,
        pie: req.body.pie,
        provincia: req.body.provincia,
        canton: req.body.canton
    };
    await Usuario.findByIdAndUpdate(req.params.id, {$set: usuario}, {new: true});
    res.json({'status': 'Usuario actualizado'});
}

usuarioCtrl.elimUsuario = async (req,res) => {
    await Usuario.findByIdAndRemove(req.params.id);
    res.json({'status': 'eliminado'});

}



module.exports = usuarioCtrl;