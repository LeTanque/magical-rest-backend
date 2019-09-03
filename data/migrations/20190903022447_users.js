exports.up = (knex) => {
    return knex.schema.createTable("users", (users) => {
        users.increments();

        users
            .string("username", 255)
            .notNullable()
            .unique();

        users
            .string("password", 255)
            .notNullable()

        users.timestamp("created_at").defaultTo(knex.fn.now());
    })
}

exports.down = (knex) => {
    return knex.schema.dropTableIfExists("users");
}


