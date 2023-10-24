const express=require('express')
const router=express.Router()
//app.use(express.static('public'))
const Checklist=require('../models/checklist')



router.get('/checklist', (req,res)=>{
    res.send('rota checklist')
})

router.get('/sexo',(req,res)=>{res.send('sexo')})

router.get('/', (req,res)=>{
console.log('olá')
res.send('pagina checklist')})

router.post('/',(req,res)=>{
console.log(req.body);
res.status(200).json(req.body)
})

router.get('/:id',(req,res)=>{console.log(req.params.id);
res.send(`ID: ${req.params.id}`)})

router.put('/id:',(req,res)=>{
console.log(req.body);
res.send(` put ID: ${req.params.id}`)    

})

router.delete('/id:',(req,res)=>{
    console.log(req.body);
    res.send(`DELETE ID: ${req.params.title}`)    
    
    })



module.exports=router