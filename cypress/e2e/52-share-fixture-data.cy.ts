
// Share fixture if we are gona use alias we need the word function and not the arrow function

import { testData} from './model'
describe('Using a Fixture', () => {

    beforeEach(function(){
        cy.fixture('jsonExample').as('testData')
    });
    it('Loading the file and display the data in the log', function(){
        
        cy.get<testData>('@testData').then((testData) => {
            cy.log('Text', testData)
            cy.log('This is test data property 1',testData.property1)
        })
    });
    it('Loading the file and display the data in the log', function(){
        
        
        cy.get<testData>('@testData').then((testData) => {
            cy.log('Text', testData)
            cy.log('This is test data property 1',testData.property1)
        })
    });
    it('Loading the file and display the data in the log', function()  {
        cy.get<testData>('@testData').then((testData) => {
            cy.log('Text', testData)
            cy.log('This is test data property 1',testData.property1)
        })
        
    });
    it('Loading the file and display the data in the log', function() {
      
        cy.get<testData>('@testData').then((testData) => {
            cy.log('Text', testData)
            cy.log('This is test data property 1',testData.property1)
        })
    });
});