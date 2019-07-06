
exports.up = function(knex) {
    return knex.schema.alterTable('cards', (cards) => {
        cards.text('variations').alter();
    })
};

exports.down = function(knex) {
    return knex.schema.alterTable('cards', (cards) => {
        cards.string('variations', 255).alter();
    })
};
