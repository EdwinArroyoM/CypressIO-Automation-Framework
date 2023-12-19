// We use the closures like then()

let externalVariable: string = 'test';

describe('Basics', () => {
    beforeEach(() => {
        cy.visit('dynamicid')
    });
    it('Find by text',  function(){  //We cannot create variables inside that invokes the text it going to fail
        cy.contains('button', 'Button with Dynamic ID').invoke('text').then((text) => { // That's why we use aliases
            externalVariable = text
            cy.wrap(externalVariable).as('textFromContains')
            cy.log(externalVariable)

        })
        cy.log('this is the wrong log: '+ externalVariable) // Will lose the value
        cy.get('@textFromContains').then((text) => {
            cy.log('This is the contain text outside the closure: '+ text)
        })
    });

    // But what can i do if I want to use it outside->
    // 
    it('Sharing context by Alias', function() {
        externalVariable = this.textFromContains
        cy.log(externalVariable)
    });
});
