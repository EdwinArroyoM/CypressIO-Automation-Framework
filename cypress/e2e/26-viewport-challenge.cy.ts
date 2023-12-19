
describe('cy.viewport() demo', () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("angularQA")}/angularjs-protractor-practice-site`)
  });
  it('device name', () => {
    cy.viewport('iphone-6')
    // Using pre-configured dimensions.
    cy.get('#mobile_menu_toggler').should('be.visible')
  });
  it('specific port', () => {
    cy.viewport(500, 600)
    cy.get('#mobile_menu_toggler').should('exist')
    // Using custom dimensions.
  });
});