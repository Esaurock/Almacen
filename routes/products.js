const express = require('express')
const mongodb = require('mongodb')

const route = express.Router()
const db =mongodb('mongodb://localhost:27017')

var data = [
    {
        "id":1,
        "name": "Libros",
        "price": 10,
        "stock": 40
    },
    {
        "id": 2,
        "name": "Cuadernos",
        "price": 220,
        "stock": 43
    }
]

route.get('/', (req, res) => {
    // retorna un mensaje
    // res.send('Proximamente  retornara todos los productos')
    // retornamos un json del vector data
    res.json(data)
})

route.get('/:id', (req, res) => {
    var { id } = req.params
    //var id = req.params.id
    //res.send('Proximamente retornara el producto: ' + id)

    var result = data.find(item=>item.id == id)
    res.json(result)

})

route.post('/', (req, res) => {
    var item = req.body
    data.push(item)
    res.json({'status':'ok'})
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
