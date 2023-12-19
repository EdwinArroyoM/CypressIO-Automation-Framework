describe('Basics of testing', () => {
  beforeEach(() => {
    cy.visit("/textinput")
  })
  it('Visit test automation Playground with BaseURL', () => {
      // Base URL is configured on the Cypress Config}
      // You can also setup on the CLI Using config flag -config baseUrl=https://www.google.com
        cy.log('Hello multiple visits')
    })
    it('Visit test automation Playground with BaseURL', () => {
      cy.log('Hello multiple visits')
    })
    it('Visit test automation Playground with BaseURL', () => {
      cy.log('Hello multiple visits')
    })
    it('Visit test automation Playground with BaseURL', () => {
      cy.log('Hello multiple visits')
    })
    it('Visit test automation Playground with BaseURL', () => {
      cy.log('Hello multiple visits')
    })
  })