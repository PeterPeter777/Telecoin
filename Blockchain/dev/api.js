const express = require('node_modules/../express');
const app = express();
const bodyParser = require('node_modules/../body-parser');
const Blockchain = require('./blokchain');

const telecoin = new Blockchain();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.get('/blockchain', function (req, res) {
  //res.send(telecoin);
});

app.post('/transaction',function(req, res) {
  console.log(req.body);
  res.send({"note":'The amount of transaction is' + ' ' + req.body.amount + ' ' + 'telecoin.'});
  
});

app.get('/mine', function(req, res) {
  
});

app.listen(3000, function() {
  console.log('Listening on port 3000...');
});