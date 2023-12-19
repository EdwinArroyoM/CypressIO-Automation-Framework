describe('Basics of testing', () => {
    it('visit explanation', () => {
      cy.visit('https://www.liverpool.com.mx/', {
        headers: {
          "Accept": "application/json, text/plain, */*",
          "User-Agent":"axios/1.3.3"
        }
      }) //Expex's url
    })
    it.skip('Visit test automation Playground', () => {
        cy.visit('http://uitestingplayground.com/textinput')
    })
  })