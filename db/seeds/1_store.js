
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return Promise.join(
    knex('store').del(),
    
    knex('store').insert({name: "Ali's Store", descrition: "Farm to table hipster goodness"})
    );
};
