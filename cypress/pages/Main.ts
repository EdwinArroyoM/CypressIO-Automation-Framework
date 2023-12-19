class Main {
    private header: string = `div[class="main-header"`
    private user: string = `#userName-value` 

    // Remember the variable ahs to be different of the Get func
    
    get headerElement(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get(this.header)
    }
    get userElement(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get(this.user)
    }
    getHeader() {
        return cy.get('div[class="main-header"]')
    }
 }

export { Main}