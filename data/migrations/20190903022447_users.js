exports.up = (knex) => {
    return knex.schema.createTable("users", (users) => {
        users.increments("id");

        users
            .string("username", 255)
            .notNullable()
            .unique();

        users
            .string("password", 255)
            .notNullable();

        users
            .string("user_type", 255)
            .defaultTo("user");

        users.timestamp("created_at").defaultTo(knex.fn.now());
    })
}

exports.down = (knex) => {
    return knex.schema.dropTableIfExists("users");
}

