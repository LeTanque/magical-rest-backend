
exports.seed = (knex) => {
  return knex("decks").insert([
    {
      id:1,
      name: "Nekusar",
      description: "scary magic",
      image_url: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=376426&type=card",
      user_id:3
    }
  ]);
};

