describe('Basics of testing', () => {
  it('Visit test automation Playground with BaseURL', () => {
      // Base URL is configured on the Cypress Config}
      // You can also setup on the CLI Using config flag -config baseUrl=https://www.google.com
        cy.visit('/textinput')
    })
    it('Visit test automation Playground with BaseURL', () => {
      cy.visit('/classattr')
  })
  })