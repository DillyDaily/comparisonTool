const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  index: function(req, res) {
    knex('product')
      .then((result)=>{

        res.render("product");
      })
    .catch((err)=>{
      console.error(err)
    });
  },

  create: function(req, res) {
    knex('product')
      .insert({
        name: req.body.name,
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
