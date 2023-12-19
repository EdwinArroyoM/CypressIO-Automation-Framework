describe('Use First() & Last() broken images', () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env('theInternet')}broken_images`)
  })
  it('Broken Image detected (First)', () => {
    cy.get('div.example img')
      .first()
      .should('be.visible')
      .then(($img) => {
        img = $img[0] as unknown as HTMLImageElement | null  // To avoid any type and then cast it and union "|" type with null
        expect(img.naturalWidth).to.be.eq(0)
      })
  })
  it('Broken Image detected (Last)', () => {
    cy.get('div.example img')
      .last()
      .should('be.visible')
      .then(($img) => {
        img = $img[0] as unknown as HTMLImageElement | null
        expect(img.naturalWidth).to.be.greaterThan(0)
      })
  })
})