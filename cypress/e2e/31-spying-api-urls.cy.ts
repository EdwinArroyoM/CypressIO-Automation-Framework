describe('Intercepting API Request after clicking on a button on Cypress', () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env('demoQA')}links`)  //We use as to create alias 
    cy.intercept('GET', `${Cypress.env('demoQA')}/created`).as('linkStatus')
  });
  it('Intercept the API request', () => {
    cy.get('a#created').click()
    cy.wait("@linkStatus").then((request) => {
      // Access yelded object
      if (expect(request.response.statusCode).to.be.within(200, 299)) {
        // Range
        cy.log("This is the  request intercepted", request);
        expect(request.response.statusCode).to.be.equal(201); // Specific Code
        expect(request.response.statusMessage).to.be.equal("Created"); // Assert status message
      }
    });
  });
  it.skip('Intercept a wrong API request', () => {
    
  });
});