/* 
  https://docs.cypress.io/guides/references/experiments#Configuration
  How to save th session, cookies.
  Allow Cypress to save the login session within a test suite.
*/
Cypress.session.clearAllSavedSessions()
describe('Testing wrong and good User', () => {
  beforeEach(() => {
      cy.visit(`${Cypress.env('demoQA')}login`)
  });
  it('Sucess login good user', () => {
    cy.get('#userName').type('edwinTestQA')
    cy.get('#password').type('Test1234*')
    cy.get('#login').click()
    cy.url({timeout:12000}).should('contain', 'profile')
    cy.get('div[class="main-header"]',).should('have.text', 'Profile')
    cy.get('#userName-value').should('have.text', 'edwinTestQA')
  });

  it('Failde login with wrong user ', () => {
    cy.get('#userName').type('wrongUser')
    cy.get('#password').type('WrongPassword')
    cy.get('#login').click()
    cy.url({timeout:12000}).should('not.contain', 'profile')
    cy.get('#name').should('have.text', 'Invalid username or password!')
    cy.get('div[class="main-header"]').should('have.text','Login')
  });
});