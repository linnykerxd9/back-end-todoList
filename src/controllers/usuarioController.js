const Usuario = require("../models").Usuario

exports.listAll = (req, res) => {
   let usuario= Usuario.get({id,nome, telefone, email })
      .then(usuario => res.send(usuario))
      .catch(error => res.send(error))
   res.send(usuario);
}
exports.createOne = (req, res) => {
   const { nome, telefone, email } = req.body
   Usuario.create({ nome, telefone, email })
      .then(usuario => res.send(usuario))
      .catch(error => res.send(error))
  }