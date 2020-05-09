const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const routes = require("./router/routes.js");
const server = express(); // creates the server
const envPort = process.env.PORT || 3131; 

server.use(helmet());
server.use(express.json());
server.use(cors());

// Applies to all connections
server.all('/', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
  res.header("Access-Control-Allow-Credentials", true); 
  next();
})

// handle requests to the root of the api, the / route
server.all('/', (req, res) => {
  res.send(`
    <body style="background-color:#131313; color:#fafafa">
      <code>  
        <h1>Welcome to Magical</h1>
        <h5>${req.method} request recieved</h5>
      </code>
    </body>
  `);
});

// hello
server.listen(envPort, () =>
  console.log(`BOO YEAH! ${envPort}`)
);

// Router
// server.use("/v1/auth", authRouter); // Handles register and login
server.use('/', routes);  // Connect / to the routes

