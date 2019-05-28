const express = require("express");
const helmet = require("helmet");
const logger = require("morgan");

const db = require("./data/accounts-model.js");

const server = express();

server.use(express.json());
server.use(helmet());
server.use(logger("dev"));

// your code here

// server.get("/", (req, res) => {
//   res.send(`
//     <h2>Lambda Hubs API</h2>
//     <p>Welcome to the Lambda Hubs DB!</p>
//     `);
// });

// -= GET =-
server.get("/", (req, res) => {
  db.find().then(accounts => {
    res.status(200).json(accounts);
  });
});

// -= GET/id =-
server.get("/:id", (req, res) => {
  const { id } = req.params;

  db.findById(id)
    .then(accountid => {
      res.status(200).json(accountid);
    })
    .catch(error => {
      res.status(404).json({ error: "that specified id does not exists." });
    });
});

// -= POST =-
server.post("/", (req, res) => {
  const account = req.body;
  const { name, budget } = req.body;

  if (name && budget) {
    try {
      const addAccount = db.insert(account);
      res.status(201).json(addAccount);
    } catch (err) {
      res.status(500).json({
        message: "There was an error while saving the post to the database"
      });
    }
  } else {
    res.status(400).json({
      errorMessage: "Please provide Dept. Name and Budget for the post."
    });
  }
});

module.exports = server;
