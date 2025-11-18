'use strict'

const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const config = require('./config')
const app = express();
const router = express.Router();

//Conecta ao banco de dados
mongoose.connect(config.connectionString)

//Carregando os Models
const Product = require('./models/product')
const Customer = require('./models/custumer')
const Order = require('./models/order')

//Carrega as Rotas
const index = require('./routes/index')
const products = require('./routes/products')
const customerRoute = require('./routes/customer-route')
const orderRoute = require('./routes/order-route')

app.use(bodyParser.json({
    limit:'5mb'
}))
app.use(bodyParser.urlencoded({ extended: false }))

// Habilita o CORS
app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Origin', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token')
    res.header('Access-Control-Allow-Origin', 'GET, POST , PUT, DELETE , OPTIONS')
    next()
})


app.use('/', index);
app.use('/products', products)
app.use('/customers', customerRoute)
app.use('/orders', orderRoute)

module.exports = app