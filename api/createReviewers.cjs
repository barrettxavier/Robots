/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
const client = require("../db/client.cjs");

const createReviewers = async (reviewerEmail, reviewerName, reviewerPhone) => {
  try {
    await client.query(
      `
      INSERT INTO reviewer (ReviewerEmail, ReviewerName, ReviewerPhone)
      VALUES ('${reviewerEmail}', '${reviewerName}', '${reviewerPhone}')`
    );
    console.log("Reviewer created successfully");
  } catch (error) {
    console.error(error);
  }
};

module.exports = { createReviewers };
