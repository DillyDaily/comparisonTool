
exports.up = function(knex, Promise) {
    return knex.schema.createTable('product', (table)=>{
        table.increments();
        table.integer('store_id')
        .references('id')
        .inTable('store')
        .onDelete('CASCADE')
        .index();
        table.string('name');
        table.text('description');
        table.decimal('price');
        table.timestamps(true, true);
      });
    };

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('product');
};