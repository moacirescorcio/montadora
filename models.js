const { DataTypes } = require('sequelize');
const sequelize = require('./db');

// Modelo Montadora
const Montadora = sequelize.define('Montadora', {
    nome: { type: DataTypes.STRING, allowNull: false },
});

// Modelo Modelo (Associado a Montadora)
const Modelo = sequelize.define('Modelo', {
    nome: { type: DataTypes.STRING, allowNull: false },
    montadora_id: {
        type: DataTypes.INTEGER,
        references: { model: 'montadoras', key: 'id' },
        onDelete: 'CASCADE',
    },
});

// Modelo Veículo (Associado a Modelo)
const Veiculo = sequelize.define('Veiculo', {
    nome: { type: DataTypes.STRING, allowNull: false },
    ano: { type: DataTypes.INTEGER, allowNull: false },
    modelo_id: {
        type: DataTypes.INTEGER,
        references: { model: 'modelos', key: 'id' },
        onDelete: 'CASCADE',
    },
});

// Relacionamentos
Montadora.hasMany(Modelo, { foreignKey: 'montadora_id' });
Modelo.belongsTo(Montadora, { foreignKey: 'montadora_id' });

Modelo.hasMany(Veiculo, { foreignKey: 'modelo_id' });
Veiculo.belongsTo(Modelo, { foreignKey: 'modelo_id' });

module.exports = { Montadora, Modelo, Veiculo };
