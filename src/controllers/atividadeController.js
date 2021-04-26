exports.listAll = (req, res) => {
    const atividades = [
        {
            'id_atividade': 1,
            'descricao': 'organizar o estoque',
            'dt_prevista': '19/04/2021',
            'dt_execução': '20/04/2021'
        },
        {
            'id_atividade': 2,
            'descricao': 'treinar os ajudantes',
            'dt_prevista': '19/04/2021',
            'dt_execução': '20/04/2021'
        },
        {
            'id_atividade': 3,
            'descricao': 'comprar mais produtos',
            'dt_prevista': '19/04/2021',
            'dt_execução': '20/04/2021'
        }
    ]
    res.send(atividades)
}
exports.createOne = (req, res) => {
    const response = {
        message: 'Atividade Criada com sucesso',
        data: req.body
    }
    res.send(response)
}