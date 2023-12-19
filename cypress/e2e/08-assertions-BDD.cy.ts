describe('Basics of testing', () => {
  beforeEach(() => {
    cy.visit("/textinput")
  })
  it('Visit test automation Playground with BaseURL', () => {
    cy.url().then((url) => {
      cy.log(`Printing the URL: ${url}`)
      expect(url).contains("/textinput")
     })
    })
  })
  