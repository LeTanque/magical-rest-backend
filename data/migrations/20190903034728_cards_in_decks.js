exports.up = (knex) => {
    return knex.schema.createTable("cards_in_decks", (cardsInDecks) => {
        
        cardsInDecks
            .integer("card_id")
            .unsigned()
            .notNullable()
            .references("card_id")
            .inTable("cards")
            .onDelete("CASCADE")
            .onUpdate("CASCADE");

        cardsInDecks
            .integer("deck_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("decks")
            .onDelete("CASCADE")
            .onUpdate("CASCADE");

        cardsInDecks
            .primary(['card_id', 'deck_id']);

    })
}

exports.down = (knex) => {
    return knex.schema.dropTableIfExists("cards_in_decks");
}


