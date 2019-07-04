
exports.up = function(knex, Promise) {
    return knex.schema.createTable('cards', function(table) {
        table.string("multiverseid").unique();

        //   table.string('email').unique();

        table.string('name');

        table.json('cardObject');

        // table.timestamps();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('cards')
};
