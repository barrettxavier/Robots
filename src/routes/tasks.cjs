/* eslint-disable no-undef */
const express = require("express");
const router = express.Router();

// Import your PostgreSQL client
const client = require("../../db/client.cjs");

// Define the /robots endpoint
router.get("/", async (req, res) => {
  try {
    const result = await client.query("SELECT * FROM tasks");
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching data from database:", error);
  }
});

module.exports = router;
