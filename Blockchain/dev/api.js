const express = require('node_modules/../express');
const app = express();
const bodyParser = require('node_modules/../body-parser');
const Blockchain = require('./blokchain');
const uuid = require('node_modules/../uuid');

const nodeAddress = uuid().split('-').join('');

const telecoin = new Blockchain();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.get('/blockchain', function (req, res) {
  res.send(telecoin);
});

app.post('/transaction',function(req, res) {
 const blockIndex =  telecoin.createNewTransaction(req.body.amount, req.body.sender, req.body.recipient);
 res.json({note: 'Transaction will be added in block' + ' ' + {blockIndex}});
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

app.listen(3000, function() {
  console.log('Listening on port 3000...');
});