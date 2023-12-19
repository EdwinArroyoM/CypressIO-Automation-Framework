// We are gonna need a plugin
// node-xlsx https://www.npmjs.com/package/node-xlsx
// Straightforward excel file parser and builder.

describe('Excel playground', () => {
    it('read data from excel', () => {
        cy.parseXlsx('cypress/fixtures/excelData.xlsx').then((jsonData) => {
            // Check what it is running
            cy.log(jsonData)
        })
        
    });
});