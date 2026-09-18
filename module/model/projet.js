const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const Projet = sequelize.define('projet', {
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
    image: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    statue: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    client: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    desc: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    dev: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    communication: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    designer: {
      type: DataTypes.TEXT,
      allowNull: false
    },
}, {
    timestamps: false,
    tableName: 'projet',
    name: 'projet',
    modelNamel: 'projet'
});

module.exports = Projet;