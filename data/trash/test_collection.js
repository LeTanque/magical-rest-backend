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
          {
            artist: "Jason Chan",
            cmc: 4,
            colorIdentity: ["U"],
            colors: ["Blue"],
            foreignNames: [{
              flavor: "„Dies ist eine heilige Pflicht. Meister Belerens Vertrauen ist der Grund meiner ewigen Loyalität.",
              // imageUrl: "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=376735&type=card",
              // language: "German",
              // multiverseid: 376735,
              // name: "Jaces Archivar",
              // text: "{U}, {T}: Jeder Spieler wirft alle Karten von seiner Hand ab und zieht dann so viele Karten, wie der Spieler, der auf diese Weise am meisten Karten abgeworfen hat, abgeworfen hat."
            }],
            id: "0bc64c0c-4592-5995-aaf7-e2eacef6d46f",
            imageUrl: "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=442051&type=card",
            layout: "normal",
            // legalities: [{
            //   format: "Commander",
            //   legality: "Legal"
            // }],
            loyalty: "3",
            manaCost: "{2}{U}{U}",
            multiverseid: 442051,
            name: "Jace, the Mind Sculptor",
            number: "62",
            originalText: "+2: Look at the top card of target player's library. You may put that card on the bottom of that player's library.↵0: Draw three cards, then put two cards from your hand on top of your library in any order.↵−1: Return target creature to its owner's hand.↵−12: Exile all cards from target player's library, then that player shuffles his or her hand into his or her library.",
            originalType: "Legendary Planeswalker — Jace",
            printings: ["A25", "EMA", "MED", "V13", "VMA", "WWK"],
            rarity: "Mythic",
            // rulings: [{
            //   date: "2011-09-22",
            //   text: "If this ability causes a player to draw more cards than are left in their library, that player loses the game as a state-based action. If this ability causes all players to do this, the game is a draw.",
            // }],
            set: "A25",
            setName: "Masters 25",
            subtypes: ["Jace"],
            supertypes: ["Legendary"],
            text: "+2: Look at the top card of target player's library. You may put that card on the bottom of that player's library.↵0: Draw three cards, then put two cards from your hand on top of your library in any order.↵−1: Return target creature to its owner's hand.↵−12: Exile all cards from target player's library, then that player shuffles their hand into their library.",
            type: "Legendary Planeswalker — Jace",
            types: ["Planeswalker"],
          }
        ]);
    });
};

