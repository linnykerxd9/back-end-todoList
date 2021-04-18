module.exports = function (app) {
    app.route('/atividade')
        .get((req, res) => {
        res.send("Bem vindo a Rota de Atividade")
    })
}