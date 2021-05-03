module.exports = function (app) {
    const usuarioController = require('../controllers/usuarioController')
    app.route('/usuario')
      .get(usuarioController.listAll)
    .post(usuarioController.createOne)
  
    app.route('/usuario/:id')
    .get(usuarioController.listOne)
    .delete(usuarioController.deleteOne)
 }