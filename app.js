const express=require('express')
const app=express()
const path=require('path');
const rotaTeste=require('./src/routes/teste')
const porta=3000
const rotadmin = require('./src/routes/admin')
require('./config/database');
//app.use(express.json());
app.set('views',path.join(__dirname, 'src/views'))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))
//app.use('/',rotaTeste)
app.get('/json', (req,res)=>{res.json({tittle:'tarefa x', done: true})})

app.use('/checklist',rotadmin)

app.get('/json',(req,res)=>{
res.json({tittle: 'tarefa x', feito: false })
})
app.listen(porta,()=>{
console.log('servidor iniciado na porta '+porta)
})



