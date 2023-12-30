const express = require('node_modules/../express');
const app = express();
const bodyParser = require('node_modules/../body-parser');
const Blockchain = require('./blokchain');
const uuid = require('node_modules/../uuid/../uuid');
// acces the 3 posistion in package json -> start script 
const port = process.argv[2];

const nodeAddress = crypto.randomUUID();//().split('-').join('');

const telecoin = new Blockchain();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.get('/blockchain', function (req, res) {
  res.send(telecoin);
});


app.post('/transaction',function(req, res) {
 const blockIndex =  telecoin.createNewTransaction(req.body.amount, req.body.sender, req.body.recipient);
 res.json({note: 'Transaction will be added in block' + ' ' + blockIndex});
});

app.get('/mine', function(req, res) {
  const lastBlock = telecoin.getLastBlock();
  const previousBlockHash = lastBlock['hash'];
  const currentBlockData = {
    transaction: telecoin.pendingTransactions,
    index: lastBlock['index'] + 1
  };
  const nonce = telecoin.proofOfWork(previousBlockHash, currentBlockData);
  const blockHash = telecoin.hashBlock(previousBlockHash, currentBlockData, nonce);
 
  telecoin.createNewTransaction(12.5, "00", nodeAddress);

  const newBlock = telecoin.createNewBlock(nonce, previousBlockHash, blockHash);
  
  res.json({
    note: "New block mined successfully",
    block: newBlock
  });
});

// register a node and broadcast it the network
app.post('/register-and-broadcast-node', function(req,res) {
  const newNodeUrl = req.body.newNodeurl;
  //....
});

// register a node with the network
app.post('/register-node', function(req,res) {
  
});

// register multiple nodes at once
app.post('/register-nodes-bulk', function(req, res) {

});

app.listen(port, function() {
  console.log('Listening on port' + '' + port);
});