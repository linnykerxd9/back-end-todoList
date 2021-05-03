const Status = require("../models").Status
exports.listAll = (req, res) => {
    Status.findAll()
        .then(status => res.send(status))
        .catch(err => res.send(err));
    //dados mockados simulando o banco de dados
    /*const status = [
        {'id_status': 1,'descricao':'em andamento'},
        {'id_status': 2,'descricao':'concluido'},
        {'id_status': 3,'descricao': 'para começar'}
    ]
    res.send(status)*/
}
exports.listOne = (req, res) => {
    Status.findAll({where:{id:req.params.id}})
       .then(status => res.send(status))
       .catch(err => res.send(err))
 }
exports.createOne = (req, res) => {
    const { descricao } = req.body
    Status.create({ descricao })
        .then(status => res.send(status))
        .catch(status => res.send(status))
}