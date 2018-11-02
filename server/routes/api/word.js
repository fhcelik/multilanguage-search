const Word = require('../../models/words');

module.exports = (app) => {
  
  app.get('/api/words', (req, res, next) => {
    let simp=req.query.word;
      Word.find({'word': new RegExp("^"+simp+".*")})
      .exec()
      .then((counter) => {res.json(counter)})
      .catch((err) => next(err));
    
  });
  
  app.get('/api/pharses', (req, res, next) => {
    let simp=req.query.word;
   
    var fetchWord;
    Word.find({'word': new RegExp("^"+simp+".*")}).lean().exec(function(err,results){
        fetchWord = results;
        if(fetchWord[0].id) { console.log(fetchWord[0].id)
          Word.find({"id":fetchWord[0].id}).exec()
          .then((counter) => {res.json(counter)})
          .catch((err) => next(err));;
         }
        
    });
    
      
    
    
  });
}

