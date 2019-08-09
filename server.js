import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import routes from './router/routes';


require('dotenv').config({ 
  debug: true 
}); 

const envPort = process.env.PORT || 3131; 
const server = express(); // creates the server

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use('/', routes);  // Connect / to the routes


// Applies to all connections
server.all('/', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
  res.header("Access-Control-Allow-Credentials", true); 
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




// console.log("processenv everything from Node: ", process.env, process.env.NODE_DB_ENV)
