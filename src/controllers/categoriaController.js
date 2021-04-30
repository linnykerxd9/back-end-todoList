const Categoria = require("../models").Categoria
exports.listAll = (req,res) => {
    const categorias = [
        {
            'id_categoria': 1,
            'descricao':'atendimento'
        },
        {
            'id_categoria': 2,
            'descricao':'supervisor'
        },
        {
            'id_categoria': 3,
            'descricao':'gerente'
        }
    ]
    res.send(categorias)
}
exports.createOne = (req, res) => {
    const { descricao } = req.body
    Categoria.create({ descricao })
        .then(categoria => res.send(categoria))
        .catch(error => res.send(error))
}
