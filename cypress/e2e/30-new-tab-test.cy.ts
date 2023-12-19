describe('Dealing with links', () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env('demoQA')}links`)
  });
  it('First approach, not click on the link', () => {
    cy.get('#simpleLink').should('have.attr', 'href','https://demoqa.com')
    cy.get('#simpleLink').should('have.attr', 'target', '_blank')
    
  });
  it('Second approach, remove the target attribute', () => {
    cy.get('#simpleLink').invoke('removeAttr', 'target').click() //invoke functions on the yielded object
    cy.url().should('eq','https://demoqa.com/')
    
    
  });
  //https://stackoverflow.com/questions/66373352/bitbucket-pipeline-your-system-is-missing-the-dependency-xvfb
});