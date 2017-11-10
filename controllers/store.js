const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  index: function(req, res) {
    knex('store')
      .then((result)=>{

        res.render("store");
      })
    .catch((err)=>{
      console.error(err)
    });
  },

  create: function(req, res) {
    knex('store')
      .insert({
        name: req.body.name,
        description: req.body.description
      })
      .then((result)=>{
        res.redirect('/create/store');
      })
      .catch((err)=>{
        console.error(err)
      })
  },

}
