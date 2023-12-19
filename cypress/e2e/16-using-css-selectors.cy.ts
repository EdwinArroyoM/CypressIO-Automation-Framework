describe('Locators', () => {
  beforeEach(() => {
    cy.visit("/dynamicid")
  })
  it('Use the attribute Locators', () => {
    // cy.find has to be chained to a cy.get first as parent.
    cy.get('button[class="btn btn-primary"]')
  })
  it('Use the CSS attribute Locators', () => {
    // cy.find has to be chained to a cy.get first as parent.
    cy.get('.btn-primary')
    //Css Selector page:
    //https://www.w3schools.com/cssref/css_selectors.php
    })
  })
  