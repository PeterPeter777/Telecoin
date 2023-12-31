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
   const newTransaction = req.body;
   const blockIndex = telecoin.addTransactionToPendingTransactions(newTransaction);
   res.json({note: 'Transaction will be added in block' + ' ' + blockIndex});
});


app.post('/transaction/broadcast', function(req, res) {
   const newTransaction = telecoin.createNewTransaction(req.body.amount, req.body.sender, req.body.recipient);
   telecoin.addTransactionToPendingTransactions(newTransaction);
   
   const requestPromises = [];
   telecoin.networkNodes.forEach(networkNodeUrl => {
   const requestOptions = {
    uri: networkNodeUrl + '/transaction',
    method: 'POST',
    body: newTransaction,
    json: true
   };

   requestPromises.push(rp(requestOptions));
   });

   Promise.all(requestPromises)
   .then(data => {
    res.json({ note: 'Transaction created and broadcast successfully.'});
   });
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
  //telecoin.createNewTransaction(12.5, "00", nodeAddress);
  const newBlock = telecoin.createNewBlock(nonce, previousBlockHash, blockHash);
  
  //broadcasting mine to all network
  const requestPromises = [];
  telecoin.networkNodes.forEach(networkNodeUrl =>{
    const requestOptions = {
        uri: networkNodeUrl + '/receive-new-block',
        method: 'POST',
        body: { newBlock: newBlock},
        json: true
    };

    requestPromises.push(rp(requestOptions));
  });

  Promise.all(requestPromises)
  .then(data => {
       const requestOptions = {
        uri: telecoin.currentNodeUrl + '/transaction/broadcast',
        method: 'POST',
        body: {
          amount: 12.5,
          sender: "00",
          recipient: nodeAddress
        },
        json: true
       };

       return rp(requestOptions);
  })
  .then(data => {
  res.json({
    note: "New block mined and broadcast successfully",
    block: newBlock
  });
  });
});



app.post('/receive-new-block', function(req, res) {
   const newBlock = req.body.newBlock;
   const lastBlock = telecoin.getLastBlock();
   const correctHash = lastBlock.hash === newBlock.previousBlockHash;
   const correctIndex = lastBlock['index'] + 1 === newBlock['index'];
   if (correctHash && correctIndex) {
    telecoin.chain.push(newBlock);
    telecoin.pendingTransactions = [];
    res.json({ note: 'New block received and accepted.',
               newBlock: newBlock
  });
   } else {
    res.json ({
      note: 'New block rejected.',
      newBlock: newBlock
    });
   }
  });


// register a node and broadcast it the network
app.post('/register-and-broadcast-node', function(req,res) {
  const newNodeUrl = req.body.newNodeUrl;
  if(telecoin.networkNodes.indexOf(newNodeUrl) == -1) telecoin.networkNodes.push(newNodeUrl);//registering

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
     const notCurrentNode = telecoin.currentNodeUrl !== networkNodeUrl;
      if (nodeNotAlreadyPresent && notCurrentNode) telecoin.networkNodes.push(networkNodeUrl);
    });
    res.json({ note: 'Bulk registration successful'});
});

app.listen(port, function() {
  console.log('Listening on port' + '' + port);
});