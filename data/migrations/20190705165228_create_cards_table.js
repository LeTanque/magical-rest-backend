exports.up = function(knex) {
    return knex.schema.createTable("cards", (cards) => {
        cards.increments("card_id");
        cards.string("id").unique();
        cards.text("artist");
        cards.integer("cmc");
        cards.text("colorIdentity");
        cards.text("colors");
        cards.text("flavor");
        cards.text("foreignNames");
        cards.text("imageUrl");
        cards.text("layout");
        cards.text("legalities");
        cards.text("loyalty");
        cards.text("manaCost");
        cards.integer("multiverseid");
        cards.text("name");
        cards.text("names");
        cards.text("number");
        cards.text("originalText");
        cards.text("originalType");
        cards.text("power");
        cards.text("printings");
        cards.text("rarity");
        cards.text("rulings");
        cards.text("set");
        cards.text("setName");
        cards.text("subtypes");
        cards.text("supertypes");
        cards.text("text");
        cards.text("toughness");
        cards.text("type");
        cards.text("types");        
        cards.text("variations");
        cards.text("watermark");

        cards.timestamp("created_at").defaultTo(knex.fn.now());
        cards.timestamp("updated_at").defaultTo(knex.fn.now());

    })
}

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("cards");
}


