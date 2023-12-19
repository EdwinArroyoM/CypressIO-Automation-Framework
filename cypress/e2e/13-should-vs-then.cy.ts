describe('Basics of testing', () => {
  beforeEach(() => {
    cy.visit("/textinput")
  })
  it('Visit test automation Playground with BaseURL', () => {
    // If you gonna operate with the yielded object use "then".
    // If you gonna make assertions use "should"
    cy.url().then((url) => {
      cy.log(`Printing the URL: ${url}`)
      cy.title().should('eq', 'Text Input') //Chai Assertion
      cy.title().then((title) => {
        cy.log(title)
        expect(title).to.be.equal('Text Input')
      })
     })
    })
  })
  