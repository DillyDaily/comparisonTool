const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  index: function(req, res) {
    knex('store')
        .then((storeResult)=>{

              res.render("product", {stores:storeResult});
      })
    .catch((err)=>{
      console.error(err)
    });
  },

  create: function(req, res) {
    knex('product')
      .insert({
        name: req.body.name,
        store_id: req.body.store_id,
        price: req.body.price,
        description: req.body.description
      })
      .then((result)=>{
        res.redirect('/create/product');
      })
      .catch((err)=>{
        console.error(err)
      })
  },

}
