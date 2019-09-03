const bcrypt = require("bcryptjs");

exports.seed = (knex) => {
  return knex("users").insert([
    {
      id:1,
      username: "Big Wolf",
      password: bcrypt.hashSync("password", 5)
    },
    {
      id:2,
      username: "Animas Darling",
      password: bcrypt.hashSync("password", 5),
    },
    {
      id:3,
      username: "The Tank",
      password: bcrypt.hashSync("password", 5)
    }
  ]);
};

