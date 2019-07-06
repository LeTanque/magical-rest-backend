exports.up = function(knex, Promise) {
    return knex.schema.createTable('cards', (cards) => {
        cards
        .string('id')
        .unique();
        cards
        .string('artist', 255);
        cards
        .integer('cmc');
        cards
        .string('colorIdentity', 255);
        cards
        .string('colors', 255)
        cards
        .string('flavor', 255);
        cards
        .text('foreignNames');
        cards
        .string('imageUrl', 255);
        cards
        .string('layout', 255);
        cards
        .text('legalities');
        cards
        .string('loyalty', 255);
        cards
        .string('manaCost', 255);
        cards
        .integer('multiverseid');
        cards
        .string('name', 255);
        cards
        .string('names', 255);
        cards
        .string('number', 255);
        cards
        .string('originalText', 255);
        cards
        .string('originalType', 255);
        cards
        .string('power', 255);
        cards
        .string('printings', 255);
        cards
        .string('rarity', 255);
        cards
        .text('rulings');
        cards
        .string('set', 255);
        cards
        .string('setName', 255);
        cards
        .string('subtypes', 255);
        cards
        .string('supertypes', 255);
        cards
        .string('text', 255);
        cards
        .string('toughness', 255);
        cards
        .string('type', 255);
        cards
        .string('types', 255);        
        cards
        .string('variations', 255);
        cards
        .string('watermark', 255);

        cards
        .timestamp('created_at')
        .defaultTo(knex.fn.now());
        cards
        .timestamp('updated_at')
        .defaultTo(knex.fn.now());
    })
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('cards');
}


