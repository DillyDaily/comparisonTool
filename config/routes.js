//Update the name of the controller below and rename the file.

const store = require("../controllers/store.js")
const product = require("../controllers/product.js")
const compare = require("../controllers/compare.js")
module.exports = function(app){

//Middleware
  app.use(checkSession);

  app.get('/create/store', store.index);

  app.post('/create/store', store.create);

  app.get('/create/product', product.index);

  app.post('/create/product', product.create);

  app.get('/', compare.getAll);

  app.get('/compare/:id', compare.addCompare);

  app.get('/compare', compare.showCompare);

}

function checkSession(req, res, next){
  if(!req.session.compare){
    req.session.compare = [];
    req.session.save(()=>{
      next();
    })
  }else{
    next();
  }
}