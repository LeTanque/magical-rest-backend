exports.up = function(knex) {
    return knex.schema.createTable("decks", (decks) => {
        decks.increments("id");

        decks
            .text("name")
            .notNullable();

        decks
            .text("description");

        decks
            .text("image_url");

        decks.timestamp("created_at").defaultTo(knex.fn.now());
        
        decks
            .integer("user_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("users")
            .onDelete("CASCADE")
            .onUpdate("CASCADE");

    })
}

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("decks");
}


