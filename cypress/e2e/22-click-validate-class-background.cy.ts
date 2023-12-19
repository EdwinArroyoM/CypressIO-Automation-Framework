
describe('Click challenge', () => {
   beforeEach(() => {
    cy.visit('/click')
   });
  it('Assert classes', () => {
    cy.get('li[class*="nav"]>a').eq(1).should('have.attr', 'href', '/resources')
    cy.get('a[href="/resources"]')
    cy.get('#badButton').should('have.class', 'btn btn-primary').click().should('have.class', 'btn btn-success')
  });
  it('Assert background', () => {
    cy.get('#badButton').click()
    cy.get('#badButton').should('have.css','background-color', 'rgb(40, 167, 69)')
  });
 });