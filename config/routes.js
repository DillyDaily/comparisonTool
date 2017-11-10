//Update the name of the controller below and rename the file.

const store = require("../controllers/store.js")
const product = require("../controllers/product.js")
module.exports = function(app){

  // app.use(storeCheck);

  app.get('/create/store', store.index);

  app.post('/create/store', store.create);

  app.get('/create/product', product.index);

  app.post('/create/product', product.create);

}

// function storeCheck(req, res, next){
//   if(!req.session.store){
//     req.session.store = [];
//     req.session.save(()=>{
//       next();
//     })
//   }else{
//     next();
//   }
// }