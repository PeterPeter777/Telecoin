const Blockchain = require('./blokchain');
const telecoin = new Blockchain();

/*
* Test createNewBlock method
* bitcoin.createNewBlock(2389, '0IHNJKKK90N', '90ANSDFR6RTGHJ');
* bitcoin.createNewBlock(111, '0IANSDFRE875WW', 'NJHGSHSJSK6644RR');
* bitcoin.createNewBlock(123, 'UIRTH54WWEED', '998RRANSD66SEW');
*/


/*
* Testing creating the new transaction and push it in the to block 
*/
/*telecoin.createNewBlock(8785, 'EDKFND88WWEE', '0IUJERHSNNN8');
telecoin.createNewTransaction(100, 'ALEX555WEEEE855', 'JENNJSNSNNS852WW');
telecoin.createNewBlock(12354, 'EDKREJEJ8888', '0777885EERRR');

telecoin.createNewTransaction(50, 'ALEX555WEEEE855', 'JENNJSNSNNS852WW');
telecoin.createNewTransaction(100, 'ALEX555WEEEE855', 'JENNJSNSNNS852WW');
telecoin.createNewTransaction(3000, 'ALEX555WEEEE855', 'JENNJSNSNNS852WW');
telecoin.createNewBlock(98756, 'EDERTTT88888', 'AQWEDR85EERRR');
*/


//Test hashBlock() method
/*const previousBlockHash = '0IANSDFRE875WW9090WSDEE78';
const currentBlockData = [
    {
        amount:101,
        sender: 'NNNNNNNN565DERHGKD',
        recipient: 'HJKMENRT985O9090RTT'
    },
    {
        amount:30,
        sender: 'NDR896NNNN565DERHGKD',
        recipient: 'FGT87ERT0T985O9090RTT'
    },
    {
        amount:200,
        sender: 'S9875ERTT0ERNN565DERHGKD',//'S9875ERTT0ERNN565DERHGKD',
        recipient: 'FGFRTT985O9FGLLL8755WE'
    }
];

//const nonce = 100;
//with this data && with nonce 38794 hash should be 0000b1ca02e9961854c1c8482413c65695a9df167043ba3aa1ce931ee7c91d68;
console.log(telecoin.hashBlock(previousBlockHash, currentBlockData, 38794));
*/

//testing the prrofOfWork method
// on the start test the proofOfWork Method to get a nonce number of iterations, 
// than run the the hashBlock method with the nonce = iterations to compare if the hash is correct
/*const previousBlockHash = '0IANSDFRE875WW9090WSDEE78';
const currentBlockData = [
    {
        amount:101,
        sender: 'NNNNNNNN565DERHGKD',
        recipient: 'HJKMENRT985O9090RTT'
    },
    {
        amount:30,
        sender: 'NDR896NNNN565DERHGKD',
        recipient: 'FGT87ERT0T985O9090RTT'
    },
    {
        amount:200,
        sender: 'S9875ERTT0ERNN565DERHGKD',
        recipient: 'FGFRTT985O9FGLLL8755WE'
    }
];
console.log(telecoin.proofOfWork(previousBlockHash, currentBlockData));
*/


// Test genesis block - line 12 blockchain.js
console.log(telecoin);