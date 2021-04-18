module.exports = function (app) {
    app.route('/usuario')
        .get((req, res) => {
        res.send("Bem vindo a Rota de Usuario")
    })
}