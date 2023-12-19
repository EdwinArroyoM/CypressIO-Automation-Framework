// This lecture we are going to review
// Fixtures, model.d.ts  this file is use for custom types, interfaces
// etc.

import { testData} from './model'
describe('Using a Fixture', () => {
    it('Loading the file and display the data in the log', () => {
        // We use then to use the yelded object
        // The parameter its type is any (testData).
        //In typescript we have to define what is coming cause id we dont define 
        // The coming data is Any
        cy.fixture('jsonExample').then((testData:testData) => {
            cy.log('Printing objects',testData)
            cy.log('Printing objects', testData.property1)
            cy.log('Printing objects',testData.property2)
        })
    });
});