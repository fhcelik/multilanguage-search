const Word = require('../../models/words');

module.exports = (app) => {
  
  app.get('/api/words', (req, res, next) => {
    let simp=req.query.word;
    console.log(req.query.word)
  Word.find({'words.word':  {$regex:simp}})
        .exec()
        .then((counter) => res.json(counter))
        .catch((err) => next(err));
  });
}

