/* We have to install the next plugin
   Cypress drag and drop Plugin
   https://www.npmjs.com/package/@4tw/cypress-drag-drop
   Make an import on the command.ts
   Include on the tsconfig
*/
describe('Drag amd drop item', () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env('demoQA')}droppable`)
  });
  it('Drag and drop challenge', () => {
    cy.get('#draggable').drag('#droppable', {force:true})
  });
});