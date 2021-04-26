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
    let response = {
        message: 'lista criado com sucesso',
        data: req.body,
    }
      res.send(response)
}