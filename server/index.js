
/** require dependencies */
const express = require('express');
const path = require('path');


const cors = require('cors');
const bodyParser = require('body-parser');
const database = require('../config/database');
const serverConfig = require('../config/serverConfig');
const port = process.env.PORT || 5000;

/** connect to MongoDB datastore */

const db = database();    
const app = express();

//app.set('port', process.env.PORT || serverConfig.port);



/** set up middlewares */
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello rnpm dfdsf ' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));

