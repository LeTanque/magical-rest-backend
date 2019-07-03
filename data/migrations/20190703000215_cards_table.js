exports.up = function(knex, Promise) {
    return knex.schema.createTable('cards', function(cards) {
        cards.increments();

        cards.string('imageUrl').notNullable();

        cards.string('name').notNullable();
        cards.integer('cmc').notNullable();
        cards.string('manaCost');
        cards.string('type').notNullable();
        cards.integer('power');
        cards.integer('toughness');
        cards.string('text');
        cards.string('rarity').notNullable();

        cards.string('layout');
        cards.string('set').notNullable();
        cards.string('setName').notNullable();
        cards.string('flavor');
        cards.string('artist').notNullable();
        cards.string('multiverseid').notNullable();
        
        cards.timestamp('created_at').defaultTo(knex.fn.now());

        cards.timestamp('updated_at').defaultTo(knex.fn.now());
    })
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('cards');
}
