module.exports = function (app) {
    const atividadeController = require('../controllers/atividadeController.js');

    app.route('/atividade')
    .get(atividadeController.listAll)
    .post(atividadeController.createOne)

    app.route('/atividade/:id')
    .get(atividadeController.listOne)
}