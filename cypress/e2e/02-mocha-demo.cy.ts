describe('empty spec', () => { //Describe all the test scenario
  before(() => { //Before ask for a mocha function 
                 //The before step will always run before every test
    cy.log('Hello World BEFORE')
  })
  after(() => { //After ask for a mocha function
    //The after step will always run after every test
cy.log('Hello World AFTER')
  })
  beforeEach(() => { // Before each will execute before every it func (Step)
cy.log('Step necessary begining for every test (LOGIN)')
  })
  afterEach(() => { // After each will execute after every it func (Step)
cy.log('Step necessary at the end of every test (LOGOUT)')
})
  it('Test case #1', () => {  //It's are referrals for the steps of a test case
    cy.log('Hello World')
  })
  it('Test case #2', () => {  //It's are referrals for the steps of a test case
    cy.log('Hello World')
  })
  it.skip('Test case #3', () => {  // "Skip" func will skip that specific test case.
    cy.log('Hello World')
  })
  it.only('Test case #4', () => {  // "Only" func will run only that specific test case where you used the func "Only".
    cy.log('Hello World')
  })
  
})