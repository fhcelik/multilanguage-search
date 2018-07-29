const mongoose = require('mongoose')

let WordsSchema = new mongoose.Schema(
  {
  words:[
    {lang:String,word:String},
    {lang:String,word:String},
    {lang:String,word:String},
    {lang:String,word:String},
    {lang:String,word:String},
    {lang:String,word:String},
    {lang:String,word:String},
    {lang:String,word:String},
    {lang:String,word:String},
    {lang:String,word:String},
    {lang:String,word:String},
    {lang:String,word:String}
    ]
  }
);

module.exports = mongoose.model('Words', WordsSchema)