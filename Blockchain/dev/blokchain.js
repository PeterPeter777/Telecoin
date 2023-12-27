/*
*building blockchain in construktor function 
*/
const sha256 = require('../node_modules/sha256');

function Blockchain() {
    // all blocks will be stored here as a chain
    this.chain = [];
    // all new created transactions will be stored here before pasted to block
    this.pendingTransactions = [];
    // generate genesis block with arbuturary params
    //this.createNewBlock(100, '0', '0');
};

/*building blockchain in classes solution
*class Blokchain {
*   constructor(){
*      this.chain = [];
*      this.pendingTransactions = [];
* }
*....methods
*}
*/

/* Method createNewBlock
* object in block to store data we need //never be changed 
* time stamp
* nonce = the present time or occasion = number in our case, proof of work mwthod that we created new block
* hash = data from new block, all transaction will be compresed in single string = hash
* previousBlockHash = data from previous block
*/

Blockchain.prototype.createNewBlock = function(nonce, previousBlockHash, hash){
    const newBlock = {
        index: this.chain.length + 1,
        timestamp: Date.now(),
        transactions: this.pendingTransactions,
        nonce: nonce,
        hash: hash,
        previousBlockHash: previousBlockHash
    };

    this.pendingTransactions = [];
    this.chain.push(newBlock);

    return newBlock;
};

/*
*Method getLastBlock
*/
Blockchain.prototype.getLastBlock = function() {
    return this.chain[this.chain.length -1];
};

/*
* Method createNewTransaction 
* we pushed newtransaction in pendingTransactions
* we are returning number of the block where the transaction was creating
*/
Blockchain.prototype.createNewTransaction = function(amount, sender, recipient) {
    const newTransaction = {
        amount: amount,
        sender: sender,
        recipient: recipient
    };

    this.pendingTransactions.push(newTransaction);

    return this.getLastBlock()['index'] + 1;
};


/*
* method hashBlock
* return ...'98544HHSS etc....
* using SHA256 generator = look to us completely random created, which is secure
* one input = one hash if we give the same imput hash will be the same 
* install sha256 npm library : Sha256 npm 
* store code in git(main branch)
*/
Blockchain.prototype.hashBlock = function(previousBlockHash, currentBlockData, nonce) {
   const dataAsString = previousBlockHash + nonce.toString() + JSON.stringify(currentBlockData);
   const hash = sha256(dataAsString);
   return hash;
};

Blockchain.prototype.proofOfWork = function(previousBlockHash, currentBlockData) {
    // telecoin.hashBlock(previousBlockHash, currentBlockData, nonce);
    // => repeatedly hash block until it finds correct hash => '00000OIANSDFUI08N9....'
    // => uses current block data for the hash, but also the previoousBlockHash
    // => continuously changes nonce value until it finds the correct hash
    // => returns to us the nonce value that creates the correct hash (starts with 4 zeros)
    let nonce = 0;
    let hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
    while (hash.substring(0, 4) !== '0000') {
        nonce ++;
        hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
        //console.log(hash);
    } 

    return nonce; 
};



module.exports = Blockchain;
