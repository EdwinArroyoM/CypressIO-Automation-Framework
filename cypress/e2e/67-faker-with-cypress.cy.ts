// We have to install the faker plugin
// https://www.npmjs.com/package/@faker-js/faker
// npm install --save-dev @faker-js/faker
// Cypress.config.ts add config

describe("Docket Post Test", () => {
    it("Random Data", () => {
      cy.task("freshUser").then((object) => {
        cy.log("Data: ", object);
      });
    });
    it("Random Data", () => {
      cy.task("freshUser").then((object) => {
        cy.log("Data: ", object);
      });
    });
    it("Random Data", () => {
      cy.task("freshUser").then((object) => {
        cy.log("Data: ", object);
      });
    });
    it("Random Data", () => {
      cy.task("freshUser").then((object) => {
        cy.log("Data: ", object);
      });
    });
  });