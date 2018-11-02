const mongoose = require('mongoose')

let WordsSchema = new mongoose.Schema(
  {
  
    id:String,lang:String,word:String
  
   
  }
);

module.exports = mongoose.model('Words', WordsSchema,'Phrases')