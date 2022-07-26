const express = require('express')

const route = express.Router()

route.get('/', (req, res) => {
    res.send('Proximamente  retornara todos los productos')
})

route.get('/:id', (req, res) => {
    var { id } = req.params
    //var id = req.params.id
    res.send('Proximamente retornara el producto: ' + id + ' !')
})

route.post('/', (req, res) => {
    res.send('Proximamente guardara los productos')
})

route.put('/:id', (req, res) => {
    var { id } = req.params
    res.send('Proximamente editara los prouctos: ' + id)
})

route.delete('/:id', (req, res) => {
    var { id } = req.params
    res.send('Proximamnete eliminara un producto: ' + id)
})

module.exports = route
/*
app.get('/products', (req, res) => {
    res.send('Aqui estan los productos');
})
app.get('/people', (req, res) => {
    res.send('Aqui estan los clientes');
})*/
