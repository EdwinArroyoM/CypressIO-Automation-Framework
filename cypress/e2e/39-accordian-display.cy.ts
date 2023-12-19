describe('Accordian display attribute', () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env('demoQA')}accordian`)
  });
    it('Accordian validation example show', () => {
      cy.get('#section2Heading').click()
      // Checking if the first description was hidden correctly.
      cy.get('#section1Heading').next().should('have.css', 'display', 'none')
      //Checking if the second description is displayed
      cy.get('#section2Heading').next().should('have.css','display','block')
    })
  });