const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello rnpm dfdsf ' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));