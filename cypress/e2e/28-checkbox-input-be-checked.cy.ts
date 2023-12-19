import { eq } from "cypress/types/lodash";

describe('Demo QA', () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("theInternet")}checkboxes`)
  });
  it('Checkbox scenario', () => {
    cy.get('form#checkboxes input').eq(0).click().should('be.checked')
    
  });
});