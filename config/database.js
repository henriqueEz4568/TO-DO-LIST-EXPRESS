const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://127.0.0.1/teste', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(()=>console.log('conectado'))
.catch((err)=>console.error(err));
