describe('Locators', () => {
  beforeEach(() => {
    cy.visit("/dynamicid")
  })
  it('Using the cy.contain', () => {
    // We can use contains for those dynamic id's or elements to assert
    cy.contains("Button with Dynamic ID")
      .should('have.text', 'Button with Dynamic ID')
    })
  })
  