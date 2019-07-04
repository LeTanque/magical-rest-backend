exports.up = function(knex, Promise) {
    return knex.schema.createTable('cards', (cards) => {

        // cards
        // .string('cardObject');

        cards
        .string('artist');

        cards
        .integer('cmc');

        cards
        .string('colorIdentity', ["color1", "color2", "color3", "color4", "color5", "color6"]);

        cards
        .string('colors')
        // .enu('colors', ["color1", "color2", "color3", "color4", "color5", "color6"]);

        cards
        .string('flavor');

        cards
        .string('foreignNames');

        cards
        .string('id').unique();

        cards
        .string('imageUrl');

        cards
        .string('layout');

        cards
        .string('legalities')

        cards
        .string('loyalty')

        cards
        .string('manaCost')

        cards
        .integer('multiverseid')

        cards
        .string('name')

        cards
        .string('names')

        cards
        .string('number')

        cards
        .string('originalText')

        cards
        .string('originalType')

        cards
        .string('power');

        cards
        .string('printings')
        // .enu('printings', ["print1", "print2", "print3", "print4", "print5", "print6"]);

        cards
        .string('rarity')

        cards
        .json('rulings')

        cards
        .string('set')

        cards
        .string('setName')

        cards
        .string('subtypes')
        // .enu('subtypes', ["type1", "type2", "type3", "type4", "type5", "type6"]);

        cards
        .string('supertypes')
        // .enu('supertypes', ["type1", "type2", "type3", "type4", "type5"]);

        cards
        .string('text');

        cards
        .string('toughness');

        cards
        .string('type')

        cards
        .string('types')
        // .enu('types', ["type1", "type2", "type3", "type4", "type5", "type6"]);
        
        cards
        .string('variations');

        cards
        .string('watermark')

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


