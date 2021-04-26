'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Atividade extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Atividade.belongsTo(models.Lista, {
        targetKey: 'id',
        as: 'idLista'
      }),
        Atividade.belongsTo(models.Status, {
          targetKey: 'id',
          as: 'IdStatus'
        }),
        Atividade.hasMany(models.AtividadeUsuario)
    }
  };
  Atividade.init({
    descricao: DataTypes.STRING,
    dataPrevista: DataTypes.DATEONLY,
    dataExecucao: DataTypes.DATEONLY,
    idLista: DataTypes.INTEGER,
    idStatus: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Atividade',
  });
  return Atividade;
};