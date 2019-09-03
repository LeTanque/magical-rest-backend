
exports.seed = (knex) => {
  return knex("cards_in_decks").insert([
    {
      card_id:3,
      deck_id:1
    },
    {
      card_id:4,
      deck_id:1
    }
  ]);
};

