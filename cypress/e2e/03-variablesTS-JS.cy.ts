describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    cy.log('Hello World')
  })
  it('Typescript Introduction', () => {
    let stringVar: string = '9'
    let numberVar: number = 9
    let booleanVar: boolean = true 
    let anyVar: any = 'string' //Any can be assigned with any type of var
    
    function addTwoNumbers(a:number, b:number):number {
      return a+b
    }
    interface User{
      username: string
      password: string 
    }
    function returningUserInformation(user:User): void{
      console.log('This is the user name' + user.username)
      console.log('This is the password' + user.password)
    }
  })
})