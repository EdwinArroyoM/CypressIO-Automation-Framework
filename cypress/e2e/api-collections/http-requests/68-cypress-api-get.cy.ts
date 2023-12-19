// Sandbox to work and test API's
// https://jsonplaceholder.typicode.com/

describe("Basic API Test examples", () => {
  it("GET Request", () => {
    // Sending request
    cy.request("GET", "https://jsonplaceholder.typicode.com/posts/1").then(
      (response) => {
        cy.log("response Object: ", response);
        expect(response.body.title).to.equals(
          "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
        );
        expect(response.statusText).to.equals("OK");
      }
    );
  });
  it("GET Request Array", () => {
    cy.visit("https://jsonplaceholder.typicode.com/");
    cy.request("GET", "https://jsonplaceholder.typicode.com/posts").then(
      (response) => {
        cy.log("response Object: ", response);
        expect(response.body).lengthOf(100);
        expect(response.body[0].id).to.equals(1);
      }
    );
  });
});
