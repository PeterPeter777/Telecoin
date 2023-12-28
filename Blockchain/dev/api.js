const express = require('node_modules/../express');
const app = express();

app.get('/blockchain', function (req, res) {
  res.send(telecoin);
});

app.post('/transaction',function(res, req) {
  
});

app.get('/mine', function (req, res) {
  
});

app.listen(3000, function() {
  console.log('Listening on port 3000...');
});