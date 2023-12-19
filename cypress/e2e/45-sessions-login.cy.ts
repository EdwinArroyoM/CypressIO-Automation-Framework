/* 
  https://docs.cypress.io/guides/references/experiments#Configuration
  How to save th session, cookies.
  Allow Cypress to save the login session within a test suite.
*/
Cypress.session.clearAllSavedSessions()
describe('Cy session - Logins', () => {
  beforeEach(() => {
    cy.session('mySession', () => {
      cy.visit(`${Cypress.env('demoQA')}login`)
      cy.get('#userName').type('edwinTestQA')
      cy.get('#password').type('Test1234*')
      cy.get('#login').click()
      cy.url().should('contain','profile')
    })
    
  });
  it('Check if session was saved', () => {
    cy.visit(`${Cypress.env('demoQA')}login`)
  });
});