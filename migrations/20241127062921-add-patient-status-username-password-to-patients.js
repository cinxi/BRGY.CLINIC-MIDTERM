'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Patients', 'Patient_Status', {
      type: Sequelize.STRING,
      allowNull: false,
    });

    await queryInterface.addColumn('Patients', 'Username', {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
    });

    await queryInterface.addColumn('Patients', 'Password', {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Patients', 'Patient_Status');
    await queryInterface.removeColumn('Patients', 'Username');
    await queryInterface.removeColumn('Patients', 'Password');
  },
};
