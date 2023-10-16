const express=require('express')



const app=express()
const porta=3000





app.get('/',(req,res)=>{
    res.send('<h1>minha lista de tarefas</h1>')
})
app.listen(porta,()=>{
    console.log('servidor iniciado na porta'+porta)
})