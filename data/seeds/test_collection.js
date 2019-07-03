exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cards')
    .del()
    .then(() => {
      // Inserts seed entries
      return knex('cards')
        .insert([
          {
            artist: "Clint Cearley",
            cmc: 0,
            flavor: "",
            id: 1, 
            imageUrl: "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=426954&type=card",
            multiverseid: "426954",
            name: "Swamp",
            rarity: "Common",
            set: "AKH",
            setName: "Amonkhet",
            text:"({T}: Add {B}.)",
            type: "Basic Land — Swamp",
            created_at: "theBeginning",
            updated_at: "testing",
          },
          {
            artist: "Svetlin Velinov",
            cmc: 4,
            flavor: "",
            id: 2, 
            imageUrl: "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=447354&type=card",
            layout: "transform",
            manaCost: "{1}{U}{B}{R}",
            multiverseid: "447354",
            name: "Nicol Bolas, the Ravager",
            power: "4",
            rarity: "Mythic",
            set: "M19",
            setName: "Core Set 2019",
            text:"Flying\nWhen Nicol Bolas, the Ravager enters the battlefield, each opponent discards a card.\n{4}{U}{B}{R}: Exile Nicol Bolas, the Ravager, then return him to the battlefield transformed under his owner's control. Activate this ability only any time you could cast a sorcery.",
            toughness: "4",
            type: "Legendary Creature — Elder Dragon",
            created_at: "theBeginning-01",
            updated_at: "testing-01",
          },
        ]);
    });
};

