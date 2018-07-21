
/** require dependencies */
//const Word = require('./models/words');
const express = require('express');
const path = require('path');
const Word = require('./routes/api/word');
//const word = require('./routes/api/word');
const cors = require('cors');
const bodyParser = require('body-parser');
const database = require('../config/database');
const serverConfig = require('../config/serverConfig');
//const port = process.env.PORT || 5000;
const api = require('./routes');
/** connect to MongoDB datastore */
const launch = require('./controllers/launch');
const db = database();    
const app = express();

app.set('port', process.env.PORT || serverConfig.port);



/** set up middlewares */
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//app.use(express.static(path.join(__dirname.replace(serverConfig.serverRoute, ''), serverConfig.publicRoute)));


const apiRoutes = express.Router();
app.use(serverConfig.apiRoute, apiRoutes);

// API routes
api(app);

Word(app);


//launch the server
launch(app);
