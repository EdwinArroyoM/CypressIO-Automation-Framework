/*
  Add custom commands-parent command support/commands.ts
*/ 
describe('Custom commands', () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env('demoQA')}login`)
  });
  it('Success Login scenario', () => {
    cy.login('edwinTestQA','Test1234*')
    cy.url().should('contain', 'profile')
  });
  it('Wrong User Login Scenario', () => {
    cy.login('wrongUser','wrongPassword')
    cy.url().should('contain', 'login')
  });
});