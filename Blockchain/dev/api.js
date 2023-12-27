const express = require('node_modules/../express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello New API in javaScript');
});

app.listen(3000);