const express = require('express');
const app = express();
const port :number = 3000;

app.get('/', (req, res) :void =>{
  res.send(data: 'Hello, World !');
});

app.listen(port, () :void => {
  console.log('Server listening on port ${port}');
});