describe("Intercepting API Request after clicking on a button on Cypress", () => {
  beforeEach(() => {
    // Execute before each test.
    cy.visit(`${Cypress.env("demoQA")}links`);
    cy.intercept("GET", `${Cypress.env("demoQA")}/created`).as("linkStatus"); //We use as to create alias
    cy.intercept("GET", `${Cypress.env("demoQA")}/bad-request`).as(
      "linkStatusBadRequest"
    );
  });
  it("Intercept the API request", () => {
    cy.get("a#created").click();
    cy.wait("@linkStatus").then((request) => {
      // Access yelded object
      cy.log("This is the  request intercepted", request);
      expect(request.response.statusCode).to.be.equal(201); // Specific Code
      expect(request.response.statusMessage).to.be.equal("Created"); // Assert status message
    });
  });
  it("Intercept a wrong API request", () => {
    cy.get('a[id="bad-request"]').click();
    cy.wait("@linkStatusBadRequest").then((request) => {
      cy.log("This is the  request intercepted", request);
      if (request.response.statusCode === 200) {
        cy.log("Wrong expected code");
      } else {
        expect(request.response.statusCode).to.be.equal(400);
      }
    });
  });
});
