
// Requirements for the test:
/*
    1.- Install plugin "cy-verify-downloads"
    https://www.npmjs.com/package/cy-verify-downloads
    2.- Add custom commands
*/

describe('Type inside an iframe', () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env('theInternet')}iframe`)
  })
  it('Write an iframe ', () => {
    cy.get('#mce_0_ifr').then(($iframe) => {
      const $body = $iframe.contents().find('body')
      cy.wrap($body).find('p').type('{selectall}{del}Hello World')
      cy.wrap($body).should('have.text','Hello World')
      
    }) 
  })

})