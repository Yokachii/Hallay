const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');

const databaseDirectory = path.join(process.cwd(), 'data');
fs.mkdirSync(databaseDirectory, { recursive: true });

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: process.env.SQLITE_STORAGE || path.join(databaseDirectory, 'hallay.sqlite'),
    logging: false,
});

module.exports = sequelize;

require('./model/projet');
require('./model/team');
const { seedDatabase } = require('./seed');

let initialization;

sequelize.initializeDatabase = async function initializeDatabase() {
    if (!initialization) {
        initialization = (async () => {
            await sequelize.sync();
            await seedDatabase(sequelize);
        })();
    }

    return initialization;
};