const Lista = require("../models").Lista
const Categoria = require('../models').Categoria
const Usuario = require('../models').Usuario
const Atividade = require('../models').Atividade
const Status = require('../models').Status

exports.listAll = (req, res) => {
    const lista = [
        {
            "id_lista": 1,
            "titulo": 'minha lista',
            "descricao": 'teste de lista 1'
        },
        {
            "id_lista": 2,
            "titulo": 'minha segunda lista',
            "descricao": 'teste de lista 2'
        }
    ]
    res.send(lista)
}
exports.createOne = (req, res) => {
    const { titulo, descricao, idUsuario, idCategoria } = req.body
    console.log(req.body);
    console.log("tentei1");
    Lista.create({ titulo, descricao, idUsuario, idCategoria })
        .then(lista => {
            console.log(lista);
            res.send(lista)
        })
        .catch(err => {
            console.log(err)
            res.send(err)
        })
}