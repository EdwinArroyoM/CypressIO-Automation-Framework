// We can install ES6 Mocha Snippets
//This will help for creating the describes.
//Best practices for the assertions is better to use Should() than Then()

describe('Retry ability demo', () => {
  it('Client delay', () => {
    cy.visit("/progressbar")
    cy.get('#startButton').click()
    cy.get('#progressBar', {timeout: 30000}).should('have.text','100%')   
  })

});