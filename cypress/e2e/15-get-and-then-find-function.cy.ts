describe('Locators', () => {
  beforeEach(() => {
    cy.visit("/dynamicid")
  })
  it('Using the cy.get and then cy.find', () => {
    // cy.find has to be chained to a cy.get first as parent.
    cy.get('div.container').find('button')
    })
  })
  