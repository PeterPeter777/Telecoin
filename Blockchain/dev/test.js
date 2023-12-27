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
const previousBlockHash = '0IANSDFRE875WW9090WSDEE78';
const currentBlockData = [
    {
        amount:10,
        sender: 'NNNNNNNN565DERHGKD',
        recipient: 'HJKMENRT985O9090RTT'
    },
    {
        amount:30,
        sender: 'NDR896NNNN565DERHGKD',
        recipient: 'FGT87ERT0T985O9090RTT'
    },
    {
        amount:500,
        sender: 'NDRCFTJ650ERNN565DERHGKD',
        recipient: 'FGFRTT985O9FGLLL8755WE'
    }
];
const nonce = 100;
console.log(telecoin.hashBlock(previousBlockHash, currentBlockData, nonce));



