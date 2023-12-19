
// We will use another plugin because the hover action from cypress is not the best solution.
// 1.- Install cypress real events (real mouse down, real mouse up, real mouse hover) etc

describe('Mouse Hover challenge', () => {
   beforeEach(() => {
    cy.visit('/mouseover')
   });
  it('Hover with cypress', () => {
    cy.get('a[title="Click me"]').trigger('mouseover')
  });
  it('Real Hover Cypress plugin', () => {
    cy.get('.text-primary').realHover()
  });
 });