'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Atividades', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      descricao: {
        type: Sequelize.STRING
      },
      dataPrevista: {
        type: Sequelize.DATEONLY
      },
      dataExecucao: {
        type: Sequelize.DATEONLY
      },
      idLista: {
        field: "idLista",
        allowNull:false,
        type: Sequelize.INTEGER,
        references: {
          model: "Lista",
          key:"id"
        }
      },
      idStatus: {
        field: "idStatus",
        allowNull:false,
        type: Sequelize.INTEGER,
        references: {
          model: "Statuses",
          key:"id"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Atividades');
  }
};