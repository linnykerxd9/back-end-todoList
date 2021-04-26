exports.listAll = (req, res) => {
    const usuarios = [
        {
           "nome": "Francisco Pessoa",
           "telefone": "81-98587.8888",
           "email": "chico.pessoa@gmail.com"
        },
        {
           "nome": "Claudinete Araujo",
           "telefone": "81-98866.6688",
           "email": "claujo.jo@gmail.com"
        }
       ]
       res.send(usuarios)
}
exports.createOne = (req, res) => {
    let response = {
      message: 'Usuário criado com sucesso',
      data: req.body
    }
    res.send(response)
  }
  