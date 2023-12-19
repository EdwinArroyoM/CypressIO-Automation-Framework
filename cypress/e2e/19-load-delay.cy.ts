// We can install ES6 Mocha Snippets vscode extensions
//This will help for creating the describes.


describe('Retry ability demo', () => {
  // it('Visit with delay', () => {
  //   cy.visit("/loaddelay", {timeout:0})  //This step just reproduce an error
    
  // });
  it('Visit with delay', () => {
    cy.visit("/loaddelay", {timeout:7000})
    
  });
  it('Visit with delay', () => {
    cy.visit("/loaddelay")
    
  });

  // We can also modify on the cypress.config file 
  // the default amount pageloadTime with the next line
  // pageLoadTimeout: timeToSet

  // Also we can configure inside cypres UI - Settings option
});