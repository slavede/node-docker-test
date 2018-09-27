'use strict';

const express = require('express');

// Constants
const PORT = 8081;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/api/test', (req, res) => {
  console.log('Got request');
  res.send({
      test: true
  });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);