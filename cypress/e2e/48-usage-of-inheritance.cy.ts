/* 
  We are going to follow the POM
*/
import { LoginPage } from '../pages/Login'
import { ProfilePage } from '../pages/Profile'
Cypress.session.clearAllSavedSessions()
describe('Usage of POM', () => {
  beforeEach(() => {
      LoginPage.visit()
      
  });
  it.skip('Usage of POM for Sucess Login', () => {
    LoginPage.submitLogin('edwinTestQA','Test1234')
    cy.url().should('contain', 'profile')
    cy.get('div[class="main-header"]').should('have.text', 'Profile')
    cy.get('#userName-value').should('have.text', 'edwinTestQA')
  });

  it.skip('Usage of POM for Failed Login', () => {
    LoginPage.submitLogin('wrongUser','wrongPassword')
    cy.url().should('not.contain', 'profile')
    cy.get('#name').should('have.text', 'Invalid username or password!')
    cy.get('div[class="main-header"]').should('have.text','Login')
  });

  it('Usage of POM with get elements', () => {
    LoginPage.usernameElement.type('edwinTestQA')
    LoginPage.passwordElement.type('Test1234*')
    LoginPage.getLoginButton().click()
    cy.url().should('contain', 'profile')
    LoginPage.userElement.should('have.text','edwinTestQA')
    ProfilePage.getHeader().should('have.text', 'Profile')
    cy.get('#userName-value').should('have.text', 'edwinTestQA')

    
  });

  it('Usage of POM with get elements wrong user', () => {
    LoginPage.usernameElement.type('wrongUser')
    LoginPage.passwordElement.type('wrongPassword')
    LoginPage.loginElement.click()
    cy.url().should('not.contain', 'profile')
    LoginPage.invalidLoginMessageElement.should('have.text','Invalid username or password!')
    LoginPage.headerElement.should('have.text','Login')
  });
});