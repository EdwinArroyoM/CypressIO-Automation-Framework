
describe('Tooltip describe', () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env('demoQA')}tool-tips`)
  });
  it('Tooltip button', () => {
    cy.get('#toolTipButton').realHover()
    // cy.get('div[role="tooltip"]')
    //   .find('div[class*="tooltip-inner"]')
    //   .should('have.text', 'You hovered over the Button')
    cy.get('.tooltip-inner').should('have.text', 'You hovered over the Button')
    
  })
  
  it('Tooltip tag text', () => {
    cy.contains('a', 'Contrary').realHover()
    cy.get('.tooltip-inner').should('have.text', 'You hovered over the Contrary')
  });
});