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
  it('POST a new resource', () => {
    cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', {
      title: 'foo',
      body: 'post #101',
      userId: 101,
    }).then((response) => {
      cy.log('response ', response)
    })
  });

  it('UPDATE a resource', () => {
    cy.request('PUT', 'https://jsonplaceholder.typicode.com/posts/1', {
      id:1,
      title: 'title example',
      body: 'body example',
      userId: 1,
    }).then((response) => {
      cy.log('response ', response)
    })
  });

  it("DELETE a resource", () => {
    // We need the resource to delete in this case #1
    cy.request("DELETE", "https://jsonplaceholder.typicode.com/posts/1").then(
      (response) => {
        cy.log("response ", response);
        expect(response.status).to.be.equal(200);
      }
    );
  });
});