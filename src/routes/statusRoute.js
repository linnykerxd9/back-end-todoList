module.exports = function (app) {
    const statusController = require('../controllers/statusController.js');

    app.route('/status')
    .get(statusController.listAll)
    .post(statusController.createOne)
    app.route('/status/:id')
    .get(statusController.listOne)
    .delete(statusController.deleteOne)
}