const { Sequelize } = require('sequelize');

// Configurando a conexão com PostgreSQL
const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    logging: false, // Para não mostrar logs de SQL no console
});

module.exports = sequelize;
