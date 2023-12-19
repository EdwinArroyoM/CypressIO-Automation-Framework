
// Requirements for the test:
/*
    1.- Install plugin "cy-verify-downloads"
    https://www.npmjs.com/package/cy-verify-downloads
    2.- Add custom commands
*/

describe('Parent iframe & Child iframe', () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env('demoQA')}nestedframes`)
  })
  it.skip('Simple and nested iframes', () => {
    cy.get('#frame1').then(function ($iframe) {
      const $body = $iframe.contents().find('body')
      // We use the cy.wrap to take the body and work with it
      cy.wrap($body).should('have.text', 'Parent frame')
      cy.wrap($body).find('iframe').then(function ($childIframe) {
        const $childBody = $childIframe.contents().find('body')
        cy.wrap($childBody).find('p').should('have.text','Child Iframe')
      })
    })
  })

  it('Simple and nested Iframe another way', () => {
    function getIframeOrderDocument() {
      return cy
        .get('#frame1', { timeout: 5000 })
        .its('0.contentDocument')
        .should('exist')
    }
     function getIframeOrderEditBody() {
      return getIframeOrderDocument().its('body').should('be.visible').then(cy.wrap)
     }
    function getChildIframeOrderDocument() {
      return getIframeOrderEditBody().find('iframe',{ timeout: 5000 })
      .its('0.contentDocument')
      .should('exist')
    }
    function getChildIframeOrderEditBody() {
      return getChildIframeOrderDocument().its('body').should('be.visible').then(cy.wrap)
    }
    
    getChildIframeOrderEditBody().find('p').should('have.text','Child Iframe')
    
  })
})