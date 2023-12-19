// Sandbox to work and test API's
// https://jsonplaceholder.typicode.com/

describe('Basic API Test examples', () => {
  it('GET Request', () => {
    cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => {
        cy.log('respons', response)
        expect(response.body.title).to.equals("sunt aut facere repellat provident occaecati excepturi optio reprehenderit")
    })
  });
});