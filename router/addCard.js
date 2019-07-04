const CardObject = require('../models/CardObject.js');
const connection = require('../connection.js');


function exit() {
  console.log('closing DB')
  connection.destroy()
    .then(() => 'closed DB')
    .catch(console.error)
}

function addCard () {
  return CardObject.forge({
    name: 'Card',
    cardObject: {
      foo: 'bar'
    }
  }).save()
    .then(console.log, console.error)
}

addCard().then(exit)

