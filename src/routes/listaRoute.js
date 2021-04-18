module.exports = function (app) {
    app.route('/lista')
    .get((req,res) => {
        res.send("Bem vindo a Rota de Lista")
    })
}