const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/todo', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', (err) => {
  console.error('Erro na conexão com o MongoDB:', err);
});

db.once('open', () => {
  console.log('Conectado ao MongoDB');
});
