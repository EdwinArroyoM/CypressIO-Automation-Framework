//Edit
import { defineConfig } from "cypress";
import { reject } from "cypress/types/bluebird";
// Verify donwload import
const { verifyDownloadTasks } = require("cy-verify-downloads");
// Excel requirements
const xlsx = require("node-xlsx").default;
const fs = require("fs"); // for file
const path = require("path"); // for file path
// My SQL requirements
const mysql = require("mysql");
//Faker
const { faker } = require("@faker-js/faker");

export default defineConfig({
  e2e: {
    baseUrl: "http://uitestingplayground.com/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      //Verify Downloads
      on("task", verifyDownloadTasks);
      //-----------------------
      //Excel implementation
      // The task plugin event handler can return a value or a promise
      on("task", {
        parseXlsx({ filePath }) {
          return new Promise((resolve, reject) => {
            try {
              const jsonData = xlsx.parse(fs.readFileSync(filePath));
              resolve(jsonData);
            } catch (e) {
              reject(e);
            }
          });
        },
      });

      //-----------------------
      //Mysql Implementation
      on("task", {
        queryDb: (query) => {
          return queryTestDb(query, config);
        },
      });
      //-----------------------
      // For the mochawesome reporter
      require("cypress-mochawesome-reporter/plugin")(on);
      //-----------------------
      // Faker task
      on("task", {
        freshUser() {
          let user = {
            username: faker.name.firstName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
            registeredAt: faker.date.past(),
            vehicle: faker.vehicle.vehicle(),
          };
          return user;
        },
      });
      //-----------------------
    },
  },
  env: {
    demoVar: "Hello from Cypress.config.ts",
    demoQA: "https://demoqa.com/",
    theInternet: "https://the-internet.herokuapp.com/",
    angularQA: "https://www.globalsqa.com/",
    db: {
      host: "127.0.0.1",
      user: "root",
      password: "",
      database: "cypress_test",
    },
    mobileViewportWidthBreakpoint: 400,
    user: "edwinTestQA",
    password: "",
  },
  viewportHeight: 1000,
  viewportWidth: 1400,
  //pageLoadTimeout: 0,}
  //defaultCommandTimeout: 16000,
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportPageTitle: "Cypress Tech Thread",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  retries: {
    runMode: 0,
    openMode: 0,
  },
  video: false,
  screenshotOnRunFailure: true,
  projectId: "y9f6g8",
});

//Creates the connection and closes.
function queryTestDb(query, config) {
  // creates a new mysql connection using credentials from cypress.json env's
  const connection = mysql.createConnection(config.env.db);
  // start connection to db
  connection.connect();
  // exec query + disconnect to db as a Promise
  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) reject(error);
      else {
        connection.end();
        // console.log(results)
        return resolve(results);
      }
    });
  });
}
