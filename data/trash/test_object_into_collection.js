// Test adding a card object to db instead of each individual field.
exports.seed = function(knex) {
  return knex('cards')
  .del()
  .then(() => {
    // Inserts seed entries
    return knex('cards')
    .insert(
      {
        cardObject: {
          artist:"Josh Hass",
          cmc:3,
          colorIdentity:["B"],
          colors:["Black"],
          flavor:"\"It is impious to admit, but I do enjoy pirate blood. Something in the salty tang of it, the spice of rebellion.\"",
          id:"566490e5-e6bc-5569-b452-4655081e064d",
          imageUrl:"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=439719&type=card",
          multiverseid:439719,
          name:"Arterial Flow",
          number:"62",
          text:"Each opponent discards two cards. If you control a Vampire, each opponent loses 2 life and you gain 2 life.",
          type:"Sorcery"
        }
      }
    );
  });
};
