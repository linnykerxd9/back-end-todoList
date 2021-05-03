const Usuario = require("../models").Usuario

exports.listAll = (req, res) => {
       Usuario.findAll()
      .then(usuario => res.send(usuario))
      .catch(error => res.send(error))
}
exports.listOne = (req, res) => {
   Usuario.findAll({where:{id:req.params.id}})
      .then(usuario => res.send(usuario))
      .catch(err => res.send(err))
}
exports.createOne = (req, res) => {
   const { nome, telefone, email } = req.body
   Usuario.create({ nome, telefone, email })
      .then(usuario => res.send(usuario))
      .catch(error => res.send(error))
  }

exports.deleteOne = (req, res) => {
   Usuario.destroy({where:{id:req.params.id}})
      .then(response = {
         message: 'Usuário deletado com sucesso'},
       res.send(response))
      .catch(err => res.send(err))
}