// We can install ES6 Mocha Snippets
//This will help for creating the describes.

Cypress.config("defaultCommandTimeout",16000)
describe('Retry ability demo', () => {
  it('Client delay', () => {
    cy.visit("/clientdelay")
    cy.get('#ajaxButton').click()
    cy.get('.bg-success').should('have.text','Data calculated on the client side.')
    
  })

});