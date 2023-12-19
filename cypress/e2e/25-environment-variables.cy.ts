// We need to configure this env variables on the Cypress.config.ts
// Set configs on the runner directly on the package.json and overwriting it.

describe('Environment Variables', () => {
  it('Demo of the env variables', () => {
    cy.log(`Printing env variable value ${Cypress.env("demoVar")}`)
  });
});