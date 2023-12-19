// We need create a command utils for testing the env viewport
// also config and create some env variables.
// Create env command package.json
import { isMobile } from '../support/utils'

describe('Viewport iteration', () => {
  const viewportsToTest: Cypress.ViewportPreset[] = [
    'iphone-3',
    'ipad-2',
    'macbook-15'
  ]

  viewportsToTest.forEach((viewport) => {   //Iterate the viewports
    it(viewport, () => {
      cy.viewport(viewport)
    });
  });
  
});
describe('Hybrid suite', () => {
  

  it('Main meny test', () => {
    cy.log('desktop validation')
    if (isMobile()) {
      cy.log('this is a mobile validation')
    }
  });
 
});
