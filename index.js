const express = require('express');
const sequelize = require('./db');
const { Montadora, Modelo, Veiculo } = require('./models');

const app = express();
app.use(express.json()); // Para permitir que o express lide com JSON

// Conectar ao banco e sincronizar os modelos
sequelize.sync({ force: false }).then(() => {
    console.log('Banco sincronizado');
});

// CRUD para Montadoras
app.get('/montadoras', async (req, res) => {
    const montadoras = await Montadora.findAll();
    res.json(montadoras);
});

app.post('/montadoras', async (req, res) => {
    const montadora = await Montadora.create(req.body);
    res.status(201).json(montadora);
});

app.get('/montadoras/:id', async (req, res) => {
    const montadora = await Montadora.findByPk(req.params.id);
    if (!montadora) return res.status(404).send('Montadora não encontrada');
    res.json(montadora);
});

app.put('/montadoras/:id', async (req, res) => {
    const montadora = await Montadora.findByPk(req.params.id);
    if (!montadora) return res.status(404).send('Montadora não encontrada');
    await montadora.update(req.body);
    res.json(montadora);
});

app.delete('/montadoras/:id', async (req, res) => {
    const montadora = await Montadora.findByPk(req.params.id);
    if (!montadora) return res.status(404).send('Montadora não encontrada');
    await montadora.destroy();
    res.status(204).send();
});

// CRUD para Modelos
app.post('/modelos', async (req, res) => {
    const modelo = await Modelo.create(req.body);
    res.status(201).json(modelo);
});

app.get('/modelos/:id', async (req, res) => {
    const modelo = await Modelo.findByPk(req.params.id);
    if (!modelo) return res.status(404).send('Modelo não encontrado');
    res.json(modelo);
});

app.put('/modelos/:id', async (req, res) => {
    const modelo = await Modelo.findByPk(req.params.id);
    if (!modelo) return res.status(404).send('Modelo não encontrado');
    await modelo.update(req.body);
    res.json(modelo);
});

app.delete('/modelos/:id', async (req, res) => {
    const modelo = await Modelo.findByPk(req.params.id);
    if (!modelo) return res.status(404).send('Modelo não encontrado');
    await modelo.destroy();
    res.status(204).send();
});

// CRUD para Veículos
app.post('/veiculos', async (req, res) => {
    const veiculo = await Veiculo.create(req.body);
    res.status(201).json(veiculo);
});

app.get('/veiculos/:id', async (req, res) => {
    const veiculo = await Veiculo.findByPk(req.params.id);
    if (!veiculo) return res.status(404).send('Veículo não encontrado');
    res.json(veiculo);
});

app.put('/veiculos/:id', async (req, res) => {
    const veiculo = await Veiculo.findByPk(req.params.id);
    if (!veiculo) return res.status(404).send('Veículo não encontrado');
    await veiculo.update(req.body);
    res.json(veiculo);
});

app.delete('/veiculos/:id', async (req, res) => {
    const veiculo = await Veiculo.findByPk(req.params.id);
    if (!veiculo) return res.status(404).send('Veículo não encontrado');
    await veiculo.destroy();
    res.status(204).send();
});

// Inicializar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
