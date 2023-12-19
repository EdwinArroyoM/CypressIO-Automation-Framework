
// Requirements for the test:
/*
    1.- Install plugin "cy-verify-downloads"
    https://www.npmjs.com/package/cy-verify-downloads
    2.- Add custom commands
*/

describe('Upload and Download a file', () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env('demoQA')}upload-download`)
  });
  it('donwload a file', () => {
    cy.get('a#downloadButton').click()
    cy.verifyDownload('sampleFile.jpeg')
    
  });
});