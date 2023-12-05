/* eslint-disable no-undef */
const { Client } = require("pg");
const client = new Client(
  "postgres://postgres:123456@localhost:5432/buy_robots"
);

module.exports = client;
