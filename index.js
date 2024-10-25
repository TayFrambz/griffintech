const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Conectando ao MongoDB

mongoose.connect('mongodb+srv://tataytrombin:LDlaWNUi2bAzlBPB@cluster0.ma3xr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    app.listen(3000)
    console.log('Conectou ao banco')
})
.catch((err) => console.log(err))


//mongoose.connect('mongodb+srv://tataytrombin:LDlaWNUi2bAzlBPB@cluster0.ma3xr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
    // .then(() => console.log('Conectado ao MongoDB'))
    // .catch(err => console.error('Erro ao conectar ao MongoDB:', err));//

// Inicializando o app Express
const app = express();
app.use(bodyParser.json());

// Porta do servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

const Admin = require('./models/AdminDash');

// Criar um admin
app.post('/admin', async (req, res) => {
    try {
        const admin = new Admin(req.body);
        await admin.save();
        res.status(201).send(admin);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Buscar todos os admins
app.get('/admin', async (req, res) => {
    try {
        const admins = await Admin.find();
        res.status(200).send(admins);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Atualizar um admin
app.put('/admin/:id', async (req, res) => {
    try {
        const admin = await Admin.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!admin) return res.status(404).send();
        res.status(200).send(admin);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Deletar um admin
app.delete('/admin/:id', async (req, res) => {
    try {
        const admin = await Admin.findByIdAndDelete(req.params.id);
        if (!admin) return res.status(404).send();
        res.status(200).send(admin);
    } catch (error) {
        res.status(500).send(error);
    }
});

const Kit = require('./models/Kit');

// Criar um kit
app.post('/kit', async (req, res) => {
    try {
        const kit = new Kit(req.body);
        await kit.save();
        res.status(201).send(kit);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Buscar todos os kits
app.get('/kit', async (req, res) => {
    try {
        const kits = await Kit.find();
        res.status(200).send(kits);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Atualizar um kit
app.put('/kit/:id', async (req, res) => {
    try {
        const kit = await Kit.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!kit) return res.status(404).send();
        res.status(200).send(kit);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Deletar um kit
app.delete('/kit/:id', async (req, res) => {
    try {
        const kit = await Kit.findByIdAndDelete(req.params.id);
        if (!kit) return res.status(404).send();
        res.status(200).send(kit);
    } catch (error) {
        res.status(500).send(error);
    }
});
