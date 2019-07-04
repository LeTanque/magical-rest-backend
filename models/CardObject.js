// CardObject model using bookshelf to store JSON objects
const Bookshelf = require('../server.js');

const CardObject = Bookshelf.Model.extend({
  tableName: 'cards',
//   hasTimestamps: true,
}, {
  jsonColumns: ['cardObject']
})


module.exports = Bookshelf.model('CardObject', CardObject)

