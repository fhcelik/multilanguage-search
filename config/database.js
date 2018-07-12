let mongoose = require('mongoose');
let config = require('./configure');

module.exports = () => {
  mongoose.connect(config.database, {
    useNewUrlParser: true
  });
  mongoose.connection.on('error', function () {
    console.info('Connection error! Have you executed mongod?');
  });
  mongoose.connection.once('open', function() {
    return console.log ('were connected!');
  });
  return {
    connection: mongoose.connection,
  }
};