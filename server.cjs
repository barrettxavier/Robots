/* eslint-disable no-undef */
const express = require("express");
const app = express();

const client = require("./db/client.cjs");
client.connect();

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/dist/index.html");
});

app.use("/assets", express.static("./dist/assets"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
