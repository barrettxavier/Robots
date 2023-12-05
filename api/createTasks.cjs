/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
const client = require("../db/client.cjs");

const createTasks = async (taskName) => {
  try {
    await client.query(
      `
      INSERT INTO tasks (taskName)
      VALUES ($1);
    `,
      [taskName]
    );
    console.log("Task created successfully");
  } catch (error) {
    console.error(error);
  }
};

module.exports = createTasks;
