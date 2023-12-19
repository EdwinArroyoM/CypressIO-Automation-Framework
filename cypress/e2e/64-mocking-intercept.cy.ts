//Usage of the mockData.json
// Send data from json file

describe('Basics', () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demoQA")}login`)
    cy.intercept('GET', `${Cypress.env("demoQA")}/Account/v1/User/948425fb-fdc2-4075-818c-2a39aa696f08`,
      {fixture: "mockData.json"}
    ).as('mockdemo')
  });
  it('Debug', () => {
    cy.login('EdwinTestQA', 'Test1234*')
    cy.wait('@mockdemo')
    cy.get("#userName-value").should('have.text','edwin Arroyo')
  });
 
});