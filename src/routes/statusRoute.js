module.exports = function (app) {
    app.route('/status')
        .get((req, res) => {
        res.send("Bem vindo a Rota de Status")
    })
}