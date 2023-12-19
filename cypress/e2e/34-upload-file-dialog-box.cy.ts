
// Requirements for the test:
/*
    1.- Install plugin "cypress file upload"
*/

describe('Upload and Download a file', () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env('demoQA')}upload-download`)
  });
  it('Upload a file', () => {
    cy.get('input#uploadFile').attachFile('example.json')
    cy.get('p#uploadedFilePath').should('have.text','C:\\fakepath\\example.json')
  });
});