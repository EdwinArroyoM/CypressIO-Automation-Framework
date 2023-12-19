// Usage of subtree modifications.
describe('Autocomplete HTML5', () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env('demoQA')}auto-complete`)
  });
  it('Autocomplete', () => {
    cy.get('.auto-complete__value-container').first().type('y')
    cy.contains('#react-select-2-option-0', 'Yellow').click()
      // #react-select-2-option-0
    cy.get('.auto-complete__multi-value__label').should('have.text','Yellow')
    })
  });