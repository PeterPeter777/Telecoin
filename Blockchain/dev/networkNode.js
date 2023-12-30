const express = require('node_modules/../express');
const app = express();
const bodyParser = require('node_modules/../body-parser');
const Blockchain = require('./blokchain');
const uuid = require('node_modules/../uuid/../uuid');
// acces the 3 posistion in package json -> start script 
const port = process.argv[2];
// acces library request-promise
const rp = require('node_modules/../request');

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
  if(telecoin.networkNodes.indexOf(newNodeurl) == -1) telecoin.networkNodes.push(newNodeUrl);//registering

  // request to all registered nodes - uris
  const regNodesPromises = [];
  telecoin.networkNodes.forEach(networkNodeUrl => {
     const requestOptions = {
         uri: networkNodeUrl + '/register-node',
         method: 'POST',
         body: {newNodeUrl: newNodeUrl},
         json: true
     };
     regNodesPromises.push(rp(requestOptions));
  });

  Promise.all(regNodesPromises)
  .then(data => {
    const bulkRegisterOptions = {
      uri: newNodeUrl + '/register-nodes-bulk',
      method: 'POST',
      body: { allNetworkNodes: [ ...telecoin.networkNodes, telecoin.currentNodeUrl ]},
      json: true
    };

    return rp(bulkRegisterOptions);
  })
  .then(data => {
      res.json({note: 'New node registered with network successfully.'});
  });
});

// register a node with the network
app.post('/register-node', function(req,res) {
    const newNodeUrl = req.body.newNodeUrl;
    // error Handeling
    const nodeNotAlreadyPresent = telecoin.networkNodes.indexOf(newNodeUrl) == -1;
    const notCurrentNode = telecoin.currentNodeUrl !== newNodeUrl;
    if (nodeNotAlreadyPresent && notCurrentNode) telecoin.networkNodes.push(newNodeUrl);
    res.json({ note: 'New node registered successfully with node'});
});

// register multiple nodes at once
app.post('/register-nodes-bulk', function(req, res) {
    const allNetworkNodes = req.body.allNetworkNodes;
    allNetworkNodes.forEach(networkNodeUrl => {
     const nodeNotAlreadyPresent = telecoin.networkNodes.indexOf(networkNodeUrl) == -1;
     const notCurrentNode = telcoin.currentNodeUrl !== networkNodeUrl
      if (nodeNotAlreadyPresent && notCurrentNode) telecoin.networkNodes.push(networkNodeUrl);
    });
    res.json({ note: 'Bulk registration successful'});
});

app.listen(port, function() {
  console.log('Listening on port' + '' + port);
});