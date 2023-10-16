const express=require('express')
const router=express.Router()
//app.use(express.static('public'))
router.get('/checklist', (req,res)=>{
    res.send('rota checklist')
})
router.get('/sexo',(req,res)=>{res.send('sexo')})

module.exports=router