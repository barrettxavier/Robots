/* eslint-disable no-undef */
const { Client } = require("pg");
const connection =
  process.env.DATABASE_URL ||
  "postgres://postgres:123456@localhost:5432/buy_robots";
const client = new Client(connection);

module.exports = client;
