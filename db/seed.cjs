/* eslint-disable no-undef */
const client = require("../db/client.cjs");
const { createRobots } = require("../api/createRobots.cjs");
const { createReviewers } = require("../api/createReviewers.cjs");
const { createTasks } = require("../api/createTasks.cjs");

//==================================================================================================
//==================================================================================================

const dropTables = async () => {
  try {
    await client.query(`
        DROP TABLE IF EXISTS robots, tasks, reviewer;
    `);
  } catch (error) {
    console.error(error);
  }
};

const createTables = async () => {
  try {
    await client.query(`
        CREATE TABLE robots (
          id SERIAL PRIMARY KEY,
          name VARCHAR(100) NOT NULL,
          ModelNumber VARCHAR(100) NOT NULL,
          Company VARCHAR(100) NOT NULL,
          ImageURL VARCHAR(100) NOT NULL,
          MonthsBeforeBreakdown INTEGER NOT NULL,
          IsSafeAroundChildren BOOLEAN NOT NULL,
          ReleaseDate DATE NOT NULL
        );

        CREATE TABLE tasks (
          id SERIAL PRIMARY KEY,
          taskName VARCHAR(100) NOT NULL
        );

        CREATE TABLE reviewer (
          id SERIAL PRIMARY KEY,
          ReviewerEmail VARCHAR(100) NOT NULL,
          ReviewerName VARCHAR(100) NOT NULL,
          ReviewerPhone VARCHAR(100) NOT NULL
        );
    `);
  } catch (error) {
    console.error(error);
  }
};

//==================================================================================================
// Seed Data
//==================================================================================================

const syncAndSeed = async () => {
  try {
    await client.connect();
    console.log("connected to database");

    await dropTables();
    console.log("dropped tables");

    await createTables();
    console.log("created tables");

    //==================================================================================================
    // Create Reviewers
    //==================================================================================================

    await createReviewers(
      "alice.johnson@email.com",
      "Alice Johnson",
      "123-456-7890"
    );
    await createReviewers(
      "robert.smith@email.com",
      "Robert Smith",
      "625-166-3216"
    );
    await createReviewers(
      "emily.davis@email.com",
      "Emily Davis",
      "164-565-7763"
    );
    await createReviewers(
      "sarah.miller@email.com",
      "Sarah Miller",
      "313-554-1376"
    );
    await createReviewers(
      "olivia.green@email.com",
      "Olivia Green",
      "553-776-1663"
    );
    await createReviewers(
      "michael.turner@email.com",
      "Michael Turner",
      "776-313-5541"
    );

    console.log("created reviewers");

    //==================================================================================================
    // Create Robots
    //==================================================================================================

    await createRobots(
      "RoboHelper 2000",
      "PLE-2328",
      "RobotCompany",
      "https://cdnb.artstation.com/p/assets/images/images/048/097/779/4k/felix-riano-8.jpg?1649196535",
      24,
      true,
      "2023-03-15"
    );
    await createRobots(
      "TaskMaster X3",
      "MDW-3144",
      "RobotCompany2",
      "https://cdnb.artstation.com/p/assets/images/images/048/097/745/4k/felix-riano-3.jpg?1649196475",
      36,
      true,
      "2022-07-01"
    );
    await createRobots(
      "HandyMate Pro",
      "HUY-3016",
      "RobotCompany3",
      "https://cdnb.artstation.com/p/assets/images/images/048/341/235/4k/felix-riano-30.jpg?1649794114",
      30,
      true,
      "2023-01-12"
    );
    await createRobots(
      "TacticalGuard X7",
      "DVE-1679",
      "RobotCompany4",
      "https://cdnb.artstation.com/p/assets/images/images/048/341/189/4k/felix-riano-25.jpg?1649794051",
      6,
      false,
      "2023-08-27"
    );
    await createRobots(
      "EcoCleaner Elite",
      "HGN-1346",
      "RobotCompany5",
      "https://cdna.artstation.com/p/assets/images/images/048/341/202/4k/felix-riano-26.jpg?1649794063",
      36,
      true,
      "2022-12-01"
    );
    await createRobots(
      "TechCompanion Plus",
      "DBS-9954",
      "RobotCompany6",
      "https://cdnb.artstation.com/p/assets/images/images/048/341/181/4k/felix-riano-24.jpg?1649794019",
      6,
      true,
      "2023-04-11"
    );
    console.log("created robots");

    //==================================================================================================
    // Create Tasks
    //==================================================================================================

    await createTasks("Package Delivery");
    await createTasks("Personal Assistance");
    await createTasks("Grocery Shopping");
    await createTasks("Environmental Monitoring");
    await createTasks("Furniture Assembly");
    await createTasks("Painting");
    await createTasks("Gardening Assistance");
    await createTasks("Tactical Operations Support");
    await createTasks("Intruder Deterrence");
    await createTasks("Search and Rescue");
    await createTasks("Advanced Security");
    await createTasks("Recycling Sorting");
    await createTasks("Air Quality Monitoring");
    await createTasks("Energy Efficiency Management");
    await createTasks("Home Security");
    await createTasks("IT Support");
    await createTasks("Data Organization");
    await createTasks("Personalized Task Automation");
    await createTasks("Educational Assistance");
    await createTasks("Language Translation");
    console.log("created tasks");
  } catch (error) {
    console.error(error);
  } finally {
    await client.end();
    console.log("disconnected from database");
  }
};

syncAndSeed();
