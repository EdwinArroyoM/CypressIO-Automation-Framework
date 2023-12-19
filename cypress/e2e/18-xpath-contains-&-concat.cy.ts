describe('Locators', () => {
  beforeEach(() => {
    cy.visit("/classattr")
  })
  it('How to find element by its text', () => {
    cy.xpath("//button[contains(concat(' ', @class, ' '), ' btn-warning')]")
    .should('have.css', 'background-color', 'rgb(255, 193, 7)')

  })
  })
  