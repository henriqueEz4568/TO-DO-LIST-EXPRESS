const express = require('express');
const router = express.Router();
const Checklist = require('../models/checklist');

router.get('/checklist', (req, res) => {
    res.send();
});

router.get('/sexo', (req, res) => {
    res.send('sexo');
});

router.get('/', (req, res) => {
    console.log('olá');
    res.send('pagina checklist');
});

router.post('/', async(req, res) => {
   let {name}= req.body;
try{let checklist=await Checklist.create({ name })  
res.status(200).json(checklist)}catch(error){res.status(422).json(error)}
console.log({name})


   // res.status(200).json(req.body);
});
router.get('/criando:teste',(req,res)=>{
    const id =req.params.teste;
    res.send(`pagina teste e id ${id}`)})
router.post('/criando:teste',async(req,res)=>{let { name } = req.body;
try{
    let checklist=await Checklist.create({ name })
    res.status(200).json(checklist)
}catch(error){res.status(422).json(error)}})


router.get('/:id', (req, res) => {
    console.log(req.params.id);
    res.send(`ID: ${req.params.id}`);
});

router.put('/:id', (req, res) => {
    console.log(req.body);
    res.send(`PUT ID: ${req.params.id}`);
});

router.delete('/:id', (req, res) => {
    console.log(req.body);
    res.send(`DELETE ID: ${req.params.id}`);
});

module.exports = router;
