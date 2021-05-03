module.exports = function (app) {
    const categoriaController = require('../controllers/categoriaController.js');

    app.route('/categoria')
    .get(categoriaController.listAll)
    .post(categoriaController.createOne)

    app.route('/categoria/:id')
    .get(categoriaController.listOne)
}