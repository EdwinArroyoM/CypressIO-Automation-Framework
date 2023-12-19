// Sandbox to work and test API's
// https://jsonplaceholder.typicode.com/
// Use doc from Swagger API

describe("Advanced challenges of APIs", () => {
  it("Creating a user (Emulation)", function () {
    const userId: string = "27e1f5f4-da0b-4a12-8297-7001b7c82bb6"; // We got this string from the Network (UserID String)
    cy.wrap(userId).as("userId"); // Assign alias to use on other "it's"
  });
  it("Get authorization token from the API Account", () => {
    // For generate the doc says use POST}
    // demoqa Swagger mentions need to send 2 parameters for generating Token
    cy.request("POST", `${Cypress.env("demoQA")}Account/v1/GenerateToken`, {
      // URL appears on the network
      userName: "edwinTestQA",
      password: "Qazxsw1122#",
    }).then((response) => {
      cy.log("this is the response:", response); //Use this log to extract token from body
      const token: string = response.body.token; // Saved on Token
      cy.wrap(token).as("token");
    });
  });
  it("Get the user information", function () {
    const userId: string = this.userId; // we use this to refer the Alias
    const token: string = this.token;
    const authorization: string = `Bearer ${token}`; // Authorization code alway has Bearer word
    const options = {
      method: "GET",
      url: `${Cypress.env("demoQA")}Account/v1/User/${userId}`, // Save the call as const
      headers: {
        authorization,
      },
    };
    cy.request(options).then((response) => {
      cy.log("Object", response); // Only use for demonstration purposes
      cy.log("Status code validation").then(() => {
        // Here we have all validations
        expect(response.status).equal(200);
      });
      cy.log("Status text validation").then(() => {
        expect(response.statusText).to.be.equal("OK");
      });
      cy.log("Username validation").then(() => {
        expect(response.body.username).to.be.equal("edwinTestQA");
      });
      cy.log("Book #1 validation").then(() => {
        expect(response.body.books[0].title).to.be.equal("Git Pocket Guide");
      });
      cy.log("Validate property Schema").then(() => {
        expect(response.body.username).to.be.a("string");
      });
    });
  });
});
