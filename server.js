require('dotenv').config(); // Import dotenv confi
const express = require('express'); // import the express package
const cors = require('cors');
const helmet = require('helmet'); 
const envPort = process.env.PORT || 3333; // dotenv port or 3333. Create port variable
const routes = require('./router/routes.js');

const server = express(); // creates the server

server.use(helmet());
server.use(express.json());
server.use(cors());


// Required for Heroku -> netlify integration ?
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
    <h2>MTG Magical Backend</h2>
  `);
});



// watch for connections on port 3333
server.listen(envPort, () =>
  console.log(`BOO YEAH! ${envPort}`)
);

server.use('/', routes);
