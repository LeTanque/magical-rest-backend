const bcrypt = require("bcryptjs");

exports.seed = (knex) => {
  return knex("users").insert([
    {
      id:1,
      username: "admin",
      password: bcrypt.hashSync("password", 5),
      user_type: "admin"
    },
    {
      id:2,
      username: "Animas Darling",
      password: bcrypt.hashSync("password", 5),
      user_type: "user"
    },
    {
      id:3,
      username: "The Tank",
      password: bcrypt.hashSync("password", 5),
      user_type: "user"
    }
  ]);
};

