const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const Team = sequelize.define('team', {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    picture: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    badge: {
      type: DataTypes.TEXT,
      allowNull: false
    },
}, {
    timestamps: false,
    tableName: 'team',
    name: 'team',
    modelNamel: 'team'
});

module.exports = Team;