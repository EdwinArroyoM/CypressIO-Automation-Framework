let img: HTMLImageElement;  //Fix html error
describe('Asserting broken images', () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env('demoQA')}broken`)
    
  })
  it('Select a visible image',()=> {
    cy.get('div>img[src="/images/Toolsqa.jpg"]').first().should('be.visible').then(($img) => {
      // We use natural width
      img= $img[0] as unknown as HTMLImageElement  // Fix typ error, here i Tell the compiler that is a HTMLImageElement 
      //cy.log('This is the img yielded'+ $img) 
      expect(img.naturalWidth).to.be.greaterThan(0)
    })
  })
  it('Select broken image', () => {
    cy.get('div > img[src="/images/Toolsqa_1.jpg"]').should('be.visible').then(($img) => {
      img= $img[0] as unknown as HTMLImageElement
      //cy.log('This is the img yielded', img) 
      // We use naturalwidth returns the density-corrected width of the image so a broken image will have 0
      expect(img.naturalWidth).to.be.equal(0)
    })
  })
})