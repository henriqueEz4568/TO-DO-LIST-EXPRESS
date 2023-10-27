const express = require('express');
const router = express.Router();
const Checklist = require('../models/checklist');
router.get('/home', async(req,res)=>{res.render('pages/index')})
router.get('/checklist', (req, res) => {
    res.send();
});



router.get('/',async (req, res) => {
try{
let checklist =await Checklist.find();
res.status(200).render('checklists/index',{checklist:checklist})
}catch(error){res.status(500).json(error)}
});

router.post('/', async(req, res) => {
   let {name}= req.body;
try{let checklist=await Checklist.create({ name })  
res.status(200).json(checklist)}catch(error){res.status(422).json(error)}
});
router.get('/criando:teste',(req,res)=>{
    const id =req.params.teste;
    res.send(`pagina teste e id ${id}`)})
router.post('/criando:teste',async(req,res)=>{let { name } = req.body;
try{
    let checklist=await Checklist.create({ name })
    res.status(200).json(checklist)
}catch(error){res.status(422).json(error)}})


router.get('/:id', async(req, res) => {try{
    let checklist =await Checklist.findById(req.params.id);
    res.status(200).json(checklist)
}catch(error){res.status(422).json(error)}
    
});

router.put('/:id',async (req, res) => {
let {name} = req.body
try{let checklist=await Checklist.findByIdAndUpdate(req.params.id, {name},{new:true}) 
res.status(200).json(checklist)}
catch(error){res.status(422).json(error)
}});

router.delete('/:id', async(req, res) => {
let {name}=req.body;
try{let checklist=await Checklist.findByIdAndDelete(req.params.id,{name},{new:true})
res.status(200).json(checklist) }catch(error){res.status(422).json(error)}   
    
});

router.post('/:id',async(req,res)=>{let {name}=req.body;
let id =req.params.id
try{
let checklist=await Checklist.create({name});
res.status(200).json(checklist)
}catch(error){
    res.status(422).json(error)
}


})

module.exports = router;
