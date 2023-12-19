//  Install cypress Testing library
//  https://github.com/testing-library/cypress-testing-library
//  npm install --save-dev @testing-library/cypress 
//  For the usage of findByText find for specific text

describe('Date pciker', () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env('demoQA')}date-picker`)
  });
  it('Date picker challenge', () => {
    // Challenges using select with options
    cy.get('#datePickerMonthYearInput').click()
    cy.get('select.react-datepicker__month-select').select(0)
    cy.get('select.react-datepicker__year-select').select('1900')
    //cy.get('div[class*="react-datepicker__day"]').contains('16').click()
    cy.findAllByText('16').click()
    cy.get('#datePickerMonthYearInput').should('have.value','01/16/1900')
    })
  });