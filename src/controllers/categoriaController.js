const Categoria = require("../models").Categoria
exports.listAll = (req, res) => {
    Categoria.findAll()
        .then(Categoria => res.send(Categoria))
        .catch(err => res.send(err))
        //dados mockados simulando o banco de dados
    /*const categorias = [
        {'id_categoria': 1,'descricao':'atendimento'},
        {'id_categoria': 2,'descricao':'supervisor'},
        {'id_categoria': 3,'descricao':'gerente'}
    ]
    res.send(categorias)*/
}
exports.listOne = (req, res) => {
    Categoria.findAll({where:{id:req.params.id}})
       .then(Categoria => res.send(Categoria))
       .catch(err => res.send(err))
 }
exports.createOne = (req, res) => {
    const { descricao } = req.body
    Categoria.create({ descricao })
        .then(categoria => res.send(categoria))
        .catch(error => res.send(error))
}
