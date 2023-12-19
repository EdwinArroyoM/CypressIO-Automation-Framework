
// Send passwords on a jSON files are not good practice.
// Usage of its() gets the value on the previouse yelded object
// in thus case return the whole object user array

import { User} from './model'
describe('Array of objects - Users', () => {
    it('Getting user information based on fixture', () => {
        
        // We need to specify the fixture will be an object and array of user "example.json"  
        // And use the interface that we created for the fixture file.
        cy.fixture<{ users: User[] }>('example.json').its('users').then((users) => {
            
            //The foreach will uterate the usersArray
            users.forEach(user => {
                cy.log(user.username)  // cy.log each object(user) 
                cy.log(user.password)
                    
            });
        }) 
    });
});