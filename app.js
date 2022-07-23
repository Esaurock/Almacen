const express = require('express');
//const { listenerCount } = require('process');
const app = express();
const PORT = process.env.PORT || 5000;
app.get('/',(req, res)=>{
    res.send('Hola Esau Calle');
})

app.get('/products',(req, res)=>{
    res.send('Aqui estan los productos');
})
app.get('/people',(req, res)=>{
    res.send('Aqui estan los clientes');
})

app.listen(PORT,()=>{
    console.log("LISTO!!!");
})