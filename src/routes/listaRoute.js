module.exports = function (app) {
    const listaController = require('../controllers/listaController.js');

    app.route('/lista')
    .get(listaController.listAll)
    .post(listaController.createOne)
    app.route('/lista/:id')
    .get(listaController.listOne)
    .put(listaController.updateOne)
    .delete(listaController.deleteOne)
}