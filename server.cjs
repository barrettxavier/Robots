/* eslint-disable no-undef */
const express = require("express");
const app = express();
app.use(express.json());
const robotsRouter = require("./src/routes/robots.cjs");
const tasksRouter = require("./src/routes/tasks.cjs");
const reviewerRouter = require("./src/routes/reviewer.cjs");

const client = require("./db/client.cjs");
client.connect();
app.use("/assets", express.static("./dist/assets"));

app.use("/tasks", tasksRouter);

app.use("/reviewer", reviewerRouter);

app.use("/robots", robotsRouter);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/dist/index.html");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
