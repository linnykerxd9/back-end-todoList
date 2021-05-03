const Lista = require("../models").Lista
const Categoria = require('../models').Categoria
const Usuario = require('../models').Usuario
const Atividade = require('../models').Atividade
const Status = require('../models').Status

exports.listAll = (req, res) => {
    Lista.findAll()
        .then(lista => res.send(lista))
        .catch(err => res.send(err))
        //dados mockados simulando o banco de dados
    /*const lista = [
        {"id_lista": 1,"titulo": 'minha lista',"descricao": 'teste de lista 1'},
        {"id_lista": 2,"titulo": 'minha segunda lista',"descricao": 'teste de lista 2'}
    ]
    res.send(lista)*/
}
exports.listOne = (req, res) => {
    Lista.findAll({where:{id:req.params.id}})
       .then(Lista => res.send(Lista))
       .catch(err => res.send(err))
 }
exports.createOne = (req, res) => {
    const { titulo, descricao, idUsuario, idCategoria } = req.body
    Lista.create({ titulo, descricao, idUsuario, idCategoria })
        .then(lista => res.send(lista))
        .catch(err => res.send(err))
}
exports.deleteOne = (req, res) => {
    Lista.destroy({where:{id:req.params.id}})
      .then(response = {
         message: 'Lista deletada com sucesso'},
       res.send(response))
      .catch(err => res.send(err))
}