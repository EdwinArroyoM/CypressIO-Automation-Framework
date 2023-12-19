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
  it('Input Challenge', () => {
  // # Represents the id cy.get(#idElement)
    cy.get('input#newButtonName')
  })
        
})
  