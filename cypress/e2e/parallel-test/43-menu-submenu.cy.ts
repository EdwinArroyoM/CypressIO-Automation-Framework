
describe('Menu and submenu', () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env('demoQA')}menu#`)
  });
  it('Menu and submenu challenge', () => {
    cy.get('a').contains('Main Item 2').realHover()
    cy.contains('a','SUB SUB LIST »').realHover()
  });
});