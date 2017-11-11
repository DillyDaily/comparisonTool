const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  getAll: function(req, res) {
    knex('product')
    .select("product.*", "store.name AS store_name")
    .join('store', 'product.store_id', 'store.id')
      .then((result)=>{

              res.render("index", {products:result});
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

  addCompare: function(req, res){
      knex('product')
        .where('id', req.params.id)
        .then((product)=>{
            if(req.session.compare.length == 2){
                req.session.compare.pop();
            }
            req.session.compare.push(product[0]);
            req.session.save(()=>{
                res.redirect('/');
            })
        })
  },

  showCompare: function(req, res){
      res.render('compare', {product1: req.session.compare[0], product2: req.session.compare[1]});
  }

}
