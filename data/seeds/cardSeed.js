

exports.seed = function(knex) {
  return knex('cards').del()
    .then(() => {
      return knex('cards').insert([
        {
          id: "7a68cbb8-4b5f-597d-8d31-ebd0c71077ca", 
          artist: "rk post",
          cmc: 2,
          flavor: "Infinite possibilities contained in a finite space.",
          imageUrl: "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=430454&type=card",
          manaCost: "{2}",
          multiverseid: 430454,
          created_at: knex.fn.now(),
          updated_at: knex.fn.now()
        }
      ]);
    });
};


