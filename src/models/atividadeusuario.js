'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AtividadeUsuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      AtividadeUsuario.belongsTo(models.Usuario, {
        targetKey: 'id',
        as: 'idUsuario'
      }),
        AtividadeUsuario.belongsTo(models.Atividade, {
          targetKey: 'id',
          as: 'idAtividade'
        })
    }
  };
  AtividadeUsuario.init({
    idAtividade: DataTypes.INTEGER,
    idUsuario: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'AtividadeUsuario',
  });
  return AtividadeUsuario;
};