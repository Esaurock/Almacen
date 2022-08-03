const express = require('express')


 
const route = express.Router()



route.get('/',(req,res)=>{
    res.send('ESTA ES EL INDEX PAGINA PRINCIPAL')
})

module.exports = route