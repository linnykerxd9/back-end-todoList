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
    const response = {
        message: 'Categoria Criada com Sucesso',
        data: req.body
    }
    res.send(response)
}
