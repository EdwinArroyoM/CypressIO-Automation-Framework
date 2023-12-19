import { Main} from '../pages/Main'

class Login extends Main{
    private username: string = "#userName"
    private password: string = "#password"
    private login: string = "#login"
    private invalidLoginMessage: string = "#name"

    get usernameElement():Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get(this.username)
    }

    get passwordElement():Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get(this.password)
    }

    get loginElement():Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get(this.login)
    }
    
    get invalidLoginMessageElement():Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get(this.invalidLoginMessage)
    }

    visit():void{
        cy.visit(`${Cypress.env('demoQA')}login`)
    }
    submitLogin(username:string,password:string):void {
        cy.get(this.username).type(username)
        cy.get(this.password).type(password)
        cy.get(this.login).click()
    }

    getLoginButton(){
          return cy.get('#login')
    }

    get goodButton() {
        return cy.get('#login')
    }
     
}

// export function loginButton(){
//     return cy.get('#login')
// }

export const LoginPage = new Login()

