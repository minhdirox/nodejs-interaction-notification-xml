const express = require('express');
const xmlparser = require('express-xml-bodyparser');;
const app = express();
const port = 3000;
app.use(xmlparser());

app.post('/xml', function(req, res) {
  console.log(req.body); // the posted data
  res.send(req.body);
});

app.listen(port);
console.log('Web server listening at: %s', 'http://localhost:' + port);
