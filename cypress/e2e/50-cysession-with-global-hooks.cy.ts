// Lets code the hooks on the /support/e2e.ts

Cypress.session.clearAllSavedSessions()
describe('Global hooks & Cookies', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('demoQA')}login`)
    });
    it('success login preserved', () => {
        cy.contains('#userName-value','edwinTestQA')
    });
    it('success login preserved', () => {
        cy.contains('#userName-value','edwinTestQA')
    });
    it('Counting the cookies', () => {
        cy.getCookies().then((cookies) => {
            cy.log('Cookies: ', cookies)  //If want to assert the cookies and the contain of
            expect(cookies).to.have.length.above(10) // Assertions
        })
    });
});