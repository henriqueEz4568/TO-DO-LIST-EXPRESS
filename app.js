const express=require('express')
const app=express()
const porta=3000
const rotadmin = require('./src/routes/admin')
require('./config/database');
//app.use(express.json());




app.use('/checklist',rotadmin)

app.get('/json',(req,res)=>{
res.json({tittle: 'tarefa x', feito: false })
})
app.listen(porta,()=>{
console.log('servidor iniciado na porta '+porta)
})



