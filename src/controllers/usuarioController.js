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
      .then(usuario => {
         res.json({
            message: "Usuario deletado com sucesso",
            data: usuario
          })
        })
      .catch(err => res.send(err))
}

exports.updateOne = (req, res) => {
   const { nome, telefone, email } = req.body
   Usuario.update({ nome, telefone, email },
                  { where: { id: req.params.id } })
      .then(usuario => {
         res.json({
            message: "Usuario alterado com sucesso",
            data:usuario
      })
      })
   .catch(err => {res.send(err)})
}