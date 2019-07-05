
// require('dotenv').config(); 
const dotenv = require('dotenv').config().parsed; 
// const envPort = 1111;
const envPort = dotenv.PORT || 1111; 
// console.log(dotenv.parsed.PORT)
module.exports = dotenv


const express = require('express'); // import the express package
const cors = require('cors');
const helmet = require('helmet'); 

const routes = require('./router/routes.js');
// const addCard = require('./router/addCard.js');



const server = express(); // creates the server

server.use(helmet());
server.use(express.json());
server.use(cors());

// Connect / to the routes
server.use('/', routes);

// Required for Heroku -> netlify integration ?
// Applies to all connections
server.all('/', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  // res.header("Access-Control-Allow-Origin", CLIENT_ORIGIN);
  res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
  res.header("Access-Control-Allow-Credentials", true); 
  if (req.method === "OPTIONS") {
      return res.sendStatus(204);
  }
  next();
})


// handle requests to the root of the api, the / route
server.get('/', (req, res) => {
  res.send(`
    <h2>MTG Magical Backend?</h2>
  `);
});


// watch for connections on port 3333
server.listen(envPort, () =>
  console.log(`BOO YEAH! ${envPort}`)
);



// server.use('/', addCard);




