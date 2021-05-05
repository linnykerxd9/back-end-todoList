const Atividade = require('../models').Atividade
const Status = require('../models').Status
const Lista = require('../models').Lista
const AtividadeUsuario = require('../models').AtividadeUsuario
const Usuario = require('../models').Usuario
const Categoria = require('../models').Categoria
exports.listAll = (req, res) => {
    Atividade.findAll()
        .then(Atividade => res.send(Atividade))
        .catch(err => {res.send(err)})
//dados mockados simulando o banco de dados
    /*const atividades = [
        {'id_atividade': 1,'descricao': 'organizar o estoque','dt_prevista': '19/04/2021','dt_execução': '20/04/2021'},
        {'id_atividade': 2,'descricao': 'treinar os ajudantes','dt_prevista': '19/04/2021','dt_execução': '20/04/2021'},
        {'id_atividade': 3,'descricao': 'comprar mais produtos','dt_prevista': '19/04/2021','dt_execução': '20/04/2021'}
    ]
    res.send(atividades)*/
}
exports.listOne = (req, res) => {
    Atividade.findAll({where:{id:req.params.id},
        include: [
            { model: Status },
            {
                model: Lista,
                include: [
                {model:Usuario},
                {model:Categoria}
            ]},
            {model:AtividadeUsuario,
            include:[
                {model:Usuario}
            ]}
                ]
    })
      .then(Atividade => res.send(Atividade))
      .catch(err => {res.send(err)})
}
exports.createOne = (req, res) => {
    const { descricao, dataPrevista, dataExecucao, idLista, idStatus } = req.body
    Atividade.create({ descricao, dataPrevista, dataExecucao, idLista, idStatus })
        .then(atividade => res.send(atividade))
        .catch(err => {res.send(err)})
}
exports.deleteOne = (req, res) => {
    Atividade.destroy({where:{id:req.params.id}})
    .then(atividade => {
        res.json({
           message: "Atividade deletada com sucesso",
           data: atividade
         })
       })
       .catch(err => {res.send(err)})
 }
 exports.updateOne = (req, res) => {
    const { descricao, dataPrevista, dataExecucao, idLista, idStatus } = req.body
    Atividade.update({ descricao, dataPrevista, dataExecucao, idLista, idStatus },
                    {where:{id:req.params.id}})
       .then(atividade => {
          res.json({
             message: "Atividade alterado com sucesso",
             data:atividade
       })
       })
    .catch(err => {res.send(err)})
 }