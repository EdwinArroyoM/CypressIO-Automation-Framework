describe('Basics of testing', () => {
  beforeEach(() => {
    cy.visit("/textinput")
  })
  it('Visit test automation Playground with BaseURL', () => {
    cy.url().then((url) => {
      cy.log(`Printing the URL: ${url}`)
      cy.title().should('eq', 'Text Input') //Chai Assertion
      cy.title().then((title) => {
        cy.log(title)
        expect(title).to.be.equal('Text Input')
        // # Represents the id cy.get(#idElement)
      })
     })
  })
  it('Button click', () => {
  // # Represents the id cy.get(#idElement)
  // Press Ctrl + F inside elements tab to find by xpath css selector etc.
    cy.get('input#newButtonName').type('Hello from input')
    cy.get('button#updatingButton').should('have.text', "Button That Should Change it's Name Based on Input Value").click()
    cy.get('button#updatingButton').should('have.text', "Hello from input")
  })
        
})
  