exports.listAll = (req, res) => {
    const status = [
        {
            'id_status': 1,
            'descricao':'em andamento'
        },
        {
            'id_status': 2,
            'descricao':'concluido'
        },
        {
            'id_status': 3,
            'descricao': 'para começar'
        }
    ]
    res.send(status)
}
exports.createOne = (req, res) => {
    const response = {
        message: 'status criado com sucesso',
        data: req.body
      }
      res.send(response)
}