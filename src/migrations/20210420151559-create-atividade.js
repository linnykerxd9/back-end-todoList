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
      id_Lista: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Lista',
          key: 'id'
        }
      },
      id_Status: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Status',
          key: 'id'
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