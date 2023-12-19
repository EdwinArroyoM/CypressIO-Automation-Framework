// div[id=main] div[class*="container"] Select al proximo desde una base ene ste caso main, con solo dejar un espacio
// Puedes buscar el elemento dentro de esa base

describe("Origin Demo", () => {
    it("Valid Login", () => {
      cy.visit('https://mocklab-demo.herokuapp.com/login?type=mock');
      cy.get('.demo-box a').click()
      cy.origin('https://oauth.mocklab.io', () => {
        cy.get('[name="email"]').type('test@test.com')
        cy.get('[name="password"]').type('fakePassword')
        cy.get('#login-submit').click()
      })

      cy.get('.demo-box a').click()
      cy.origin('https://oauth.mocklab.io', () => {
        cy.get('[name="email"]').type('test@test.com')
        cy.get('[name="password"]').type('fakePassword')
        cy.get('#login-submit').click()
      })
      cy.get('h1 strong').should('have.text','test@test.com')

    });
  });
  