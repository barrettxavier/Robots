/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
const client = require("../db/client.cjs");

const createRobots = async (
  name,
  modelNumber,
  company,
  imageURL,
  monthsBeforeBreakdown,
  isSafeAroundChildren,
  releaseDate
) => {
  try {
    await client.query(
      `
      INSERT INTO robots (name, ModelNumber, Company, ImageURL, MonthsBeforeBreakdown, IsSafeAroundChildren, ReleaseDate)
      VALUES ($1, $2, $3, $4, $5, $6, $7);
    `,
      [
        name,
        modelNumber,
        company,
        imageURL,
        monthsBeforeBreakdown,
        isSafeAroundChildren,
        releaseDate,
      ]
    );
    console.log("Robot created successfully");
  } catch (error) {
    console.error(error);
  }
};

module.exports = createRobots;
