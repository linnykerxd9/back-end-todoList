module.exports = function (app) {
    app.route('/categoria')
        .get((req, res) => {
        res.send("Bem vindo a Rota de categoria")
    })
}