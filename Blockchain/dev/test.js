const Blockchain = require('./blokchain');
const telecoin = new Blockchain();

// test Json for chain validation
const bc1 = {
        "chain": [
            {
                "index": 1,
                "timestamp": 1704362137668,
                "transactions": [],
                "nonce": 100,
                "hash": "0",
                "previousBlockHash": "0"
            },
            {
                "index": 2,
                "timestamp": 1704362174571,
                "transactions": [],
                "nonce": 18140,
                "hash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
                "previousBlockHash": "0"
            },
            {
                "index": 3,
                "timestamp": 1704362464114,
                "transactions": [
                    {
                        "amount": 12.5,
                        "sender": "00",
                        "recipient": "a6243c91-73c5-44cd-9ec6-d3285e0f25b6",
                        "transactionId": "1b02c0fe-b478-4e77-8630-450cf3be6ede"
                    },
                    {
                        "amount": 10,
                        "sender": "007470123IKKTTT745PPPPDDKKD",
                        "recipient": "ERTT000HLLLL00REEFFFKALLLLAA",
                        "transactionId": "48909a54-9474-4720-99c2-4cd0f834e522"
                    },
                    {
                        "amount": 20,
                        "sender": "007470123IKKTTT745PPPPDDKKD",
                        "recipient": "ERTT000HLLLL00REEFFFKALLLLAA",
                        "transactionId": "9328eb81-1863-4034-b98f-f26f11bcf3c2"
                    },
                    {
                        "amount": 30,
                        "sender": "007470123IKKTTT745PPPPDDKKD",
                        "recipient": "ERTT000HLLLL00REEFFFKALLLLAA",
                        "transactionId": "e9074761-a4c6-40ea-a67e-e32fce8b3e3b"
                    }
                ],
                "nonce": 45446,
                "hash": "00000a29d1ef22c3237304ced05036684befafdb90875cd4e1208cf4471c76e6",
                "previousBlockHash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100"
            },
            {
                "index": 4,
                "timestamp": 1704362527215,
                "transactions": [
                    {
                        "amount": 12.5,
                        "sender": "00",
                        "recipient": "a6243c91-73c5-44cd-9ec6-d3285e0f25b6",
                        "transactionId": "91689cc0-da5a-4559-b6cb-3258cd425185"
                    },
                    {
                        "amount": 40,
                        "sender": "007470123IKKTTT745PPPPDDKKD",
                        "recipient": "ERTT000HLLLL00REEFFFKALLLLAA",
                        "transactionId": "25254570-2ebb-4a41-bd2d-be9e353fd80e"
                    },
                    {
                        "amount": 50,
                        "sender": "007470123IKKTTT745PPPPDDKKD",
                        "recipient": "ERTT000HLLLL00REEFFFKALLLLAA",
                        "transactionId": "b1bb0c09-dd7f-47c6-8a14-6dca10400d1c"
                    },
                    {
                        "amount": 60,
                        "sender": "007470123IKKTTT745PPPPDDKKD",
                        "recipient": "ERTT000HLLLL00REEFFFKALLLLAA",
                        "transactionId": "51e33a4b-b4eb-475f-964f-4eeaf75939e4"
                    },
                    {
                        "amount": 70,
                        "sender": "007470123IKKTTT745PPPPDDKKD",
                        "recipient": "ERTT000HLLLL00REEFFFKALLLLAA",
                        "transactionId": "c1936d4c-56bc-4dbc-9b8e-5a4a1e1354f6"
                    }
                ],
                "nonce": 275716,
                "hash": "00000c28d677b27e3529c1e1272b209668ecc53e4c8343308fee6bcac29ba92d",
                "previousBlockHash": "00000a29d1ef22c3237304ced05036684befafdb90875cd4e1208cf4471c76e6"
            },
            {
                "index": 5,
                "timestamp": 1704362558253,
                "transactions": [
                    {
                        "amount": 12.5,
                        "sender": "00",
                        "recipient": "a6243c91-73c5-44cd-9ec6-d3285e0f25b6",
                        "transactionId": "dbed1b02-1492-464a-945a-52c97063bccb"
                    }
                ],
                "nonce": 131885,
                "hash": "0000fd7a44baf2f954596bf73ff836b83e211dd9f8113c52fbb0c1312904a457",
                "previousBlockHash": "00000c28d677b27e3529c1e1272b209668ecc53e4c8343308fee6bcac29ba92d"
            },
            {
                "index": 6,
                "timestamp": 1704362563750,
                "transactions": [
                    {
                        "amount": 12.5,
                        "sender": "00",
                        "recipient": "a6243c91-73c5-44cd-9ec6-d3285e0f25b6",
                        "transactionId": "3098d9b9-32ab-42bd-b827-9f31e8211c0c"
                    }
                ],
                "nonce": 11808,
                "hash": "0000c8a56de6b347f022be194e06d097e931a02a257e02714f485eee7eeed90f",
                "previousBlockHash": "0000fd7a44baf2f954596bf73ff836b83e211dd9f8113c52fbb0c1312904a457"
            }
        ],
        "pendingTransactions": [
            {
                "amount": 12.5,
                "sender": "00",
                "recipient": "a6243c91-73c5-44cd-9ec6-d3285e0f25b6",
                "transactionId": "2ff22240-0ce3-4c13-aea9-986b23564847"
            }
        ],
        "currentNodeUrl": "http://localhost:3001",
        "networkNodes": []
    };

console.log('VALID: ' , telecoin.chainIsValid(bc1.chain));

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
//console.log(telecoin);