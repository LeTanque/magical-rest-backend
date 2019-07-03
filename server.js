require('dotenv').config(); // Import dotenv confi
const express = require('express'); // import the express package

const server = express(); // creates the server

// handle requests to the root of the api, the / route
server.get('/', (req, res) => {
  res.send('Express for Web');
});

// watch for connections on port 3333
server.listen(process.env.PORT, () =>
  console.log(`BOO YEAH! ${process.env.PORT}`)
);
