const Blockchain = require('./blokchain');
const telecoin = new Blockchain();

// test Json for chain validation
const bc1 = {
    "chain": [
        {
            "index": 1,
            "timestamp": 1704273761052,
            "transactions": [],
            "nonce": 100,
            "hash": "0",
            "previousBlockHash": "0"
        },
        {
            "index": 1,
            "timestamp": 1704273825305,
            "transactions": [],
            "nonce": 18140,
            "hash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
            "previousBlockHash": "0"
        },
        {
            "index": 1,
            "timestamp": 1704273929597,
            "transactions": [
                {
                    "amount": 12.5,
                    "sender": "00",
                    "recipient": "fe7dcbe7-c301-4c61-92f8-7996b3b8ff3b",
                    "transactionId": "64b49ce5-2c34-4586-906b-0db803c3707e"
                },
                {
                    "amount": 10,
                    "sender": "007470123IKKTTTER7KDDKKD",
                    "recipient": "ERTT000H0000000REEFFFKALLLLAA",
                    "transactionId": "fc42969c-15d8-45db-950f-d555ae62df9b"
                },
                {
                    "amount": 20,
                    "sender": "007470123IKKTTT745PPPPDDKKD",
                    "recipient": "ERTT000HLLLL00REEFFFKALLLLAA",
                    "transactionId": "884bf70a-60a6-445b-87e9-47f1bbfb65b4"
                },
                {
                    "amount": 30,
                    "sender": "007470123IKKTTT745PPPPDDKKD",
                    "recipient": "ERTT000HLLLL00REEFFFKALLLLAA",
                    "transactionId": "8d211aa8-85c6-4701-96d3-827564656bba"
                }
            ],
            "nonce": 17232,
            "hash": "0000946a4ca8e03e62649a8a859dad8c855acd94ceb74ed3757266eb8bf49f47",
            "previousBlockHash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100"
        },
        {
            "index": 1,
            "timestamp": 1704273976175,
            "transactions": [
                {
                    "amount": 12.5,
                    "sender": "00",
                    "recipient": "fe7dcbe7-c301-4c61-92f8-7996b3b8ff3b",
                    "transactionId": "12cafb6c-9384-4318-b7bf-876a2866a252"
                },
                {
                    "amount": 40,
                    "sender": "007470123IKKTTT745PPPPDDKKD",
                    "recipient": "ERTT000HLLLL00REEFFFKALLLLAA",
                    "transactionId": "7fab2c62-b1aa-445c-a873-2e10567e82f6"
                },
                {
                    "amount": 50,
                    "sender": "007470123IKKTTT745PPPPDDKKD",
                    "recipient": "ERTT000HLLLL00REEFFFKALLLLAA",
                    "transactionId": "a4eea985-55c7-4ee6-862c-a403cf0809f7"
                },
                {
                    "amount": 60,
                    "sender": "007470123IKKTTT745PPPPDDKKD",
                    "recipient": "ERTT000HLLLL00REEFFFKALLLLAA",
                    "transactionId": "6347fac8-17db-484a-93fe-912f2a64aa57"
                },
                {
                    "amount": 70,
                    "sender": "007470123IKKTTT745PPPPDDKKD",
                    "recipient": "ERTT000HLLLL00REEFFFKALLLLAA",
                    "transactionId": "612cec62-4e19-4800-88a2-e2c61ad25190"
                }
            ],
            "nonce": 8820,
            "hash": "0000d7fc26f627c54b74cb159a71cea8f952befbc2f3d99600f4516406eb15a9",
            "previousBlockHash": "0000946a4ca8e03e62649a8a859dad8c855acd94ceb74ed3757266eb8bf49f47"
        },
        {
            "index": 1,
            "timestamp": 1704273998785,
            "transactions": [
                {
                    "amount": 12.5,
                    "sender": "00",
                    "recipient": "fe7dcbe7-c301-4c61-92f8-7996b3b8ff3b",
                    "transactionId": "44cab290-67b2-44b5-8306-8d763009c226"
                }
            ],
            "nonce": 80815,
            "hash": "00002338e3f0dfe0957302c4dffb0d5ca422109003cea64c2c9c5ff4521e4701",
            "previousBlockHash": "0000d7fc26f627c54b74cb159a71cea8f952befbc2f3d99600f4516406eb15a9"
        },
        {
            "index": 1,
            "timestamp": 1704274001619,
            "transactions": [
                {
                    "amount": 12.5,
                    "sender": "00",
                    "recipient": "fe7dcbe7-c301-4c61-92f8-7996b3b8ff3b",
                    "transactionId": "d4a5f71e-9a82-420b-8fdd-f607b713127f"
                }
            ],
            "nonce": 2577,
            "hash": "0000fd15363174eaa2f992fa078e2da1d163e0036935fe44a0ac1e60e21b4fd3",
            "previousBlockHash": "00002338e3f0dfe0957302c4dffb0d5ca422109003cea64c2c9c5ff4521e4701"
        }
    ],
    "pendingTransactions": [
        {
            "amount": 12.5,
            "sender": "00",
            "recipient": "fe7dcbe7-c301-4c61-92f8-7996b3b8ff3b",
            "transactionId": "2755fa34-6362-477a-891f-a2812c410b9d"
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