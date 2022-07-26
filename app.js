const express = require('express');
//const { listenerCount } = require('process');

const index = require('./routes/index');
const products = require('./routes/products');

const app = express();

const PORT = process.env.PORT || 5000;

app.use('/', index)
app.use('/products', products)

app.listen(PORT, () => {
    console.log("LISTO!!!");
})