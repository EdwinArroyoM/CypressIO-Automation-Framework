  /*
    1- In your  terminal run the command: npm i @cypress/xpath
    2- In your framework support file [cypress/support/e2e.{js/ts}] 
    add at the top of the file the next line: require('@cypress/xpath')
    3- If using Cypress with TS -> Add ('@cypress/xpath')
        to your tsconfig.json file "types": ["cypress", "node", "@cypress/xpath"]
 
  */
 


describe('Locators', () => {
  beforeEach(() => {
    cy.visit("/classattr")
  })
  it('How to find element by its text', () => {
    cy.xpath("//*[text()='Correct variant is']")
      .should('contain','Correct')
  })
  it('How to find element by its class', () => {
    cy.xpath("//pre[@class=' language-html']")
      .should('contain.text','button')
    })
  })
  