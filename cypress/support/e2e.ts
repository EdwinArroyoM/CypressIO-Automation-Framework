// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import './exceptions'
// Alternatively you can use CommonJS syntax:
// require('./commands')
require('@cypress/xpath');
import "cypress-real-events";
import 'cypress-mochawesome-reporter/register';

// beforeEach(() => {
//     cy.log('Hello this is a global before each hook')
//     cy.session('mySession', () => {
//         cy.visit(`${Cypress.env('demoQA')}login`)
//         cy.get('#userName').type('edwinTestQA')
//         cy.get('#password').type('Test1234*')
//         cy.get('#login').click()
//         cy.url().should('contain','profile')
//       })
// })

// after(() => {
//     cy.clearCookies()
//     cy.log('Hello this is a global after hook')
//     cy.getCookies().then((cookies) => {
//         cy.log('Cookies: ', cookies)  //If want to assert the cookies and the contain of
//         expect(cookies).to.have.length.below(5) // Assertions
//     })
// })