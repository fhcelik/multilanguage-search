const Word = require('../../models/words');

module.exports = (app) => {
  
  app.get('/api/words', (req, res, next) => {
    let simp=req.query.word;
    if(simp===undefined) {
      simp=req.query.id
      Word.find({'id': new RegExp("^"+simp+".*")})
      .exec()
      .then((counter) => {console.log(counter + simp), res.json(counter)})
      .catch((err) => next(err));
    }

    else {
      Word.find({'word': new RegExp("^"+simp+".*")})
      .exec()
      .then((counter) => {console.log(counter + simp), res.json(counter)})
      .catch((err) => next(err));
    }
  });
  

    
    
 
}

