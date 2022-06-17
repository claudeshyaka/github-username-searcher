describe('Search spec', () => {
  beforeEach(()=> {
    cy.visit('/');
  });
  it('search with valid user', () => {
    const typedUsername = 'google';
    cy.get('[data-testid="search-bar"]')
      .type(typedUsername)
      .should('have.value', typedUsername)

    cy.get('[data-testid="search"]').submit()

    cy.intercept({
      method: 'GET',
      url: 'api.github.com/users/*',
    }).as('githubApiCheck')

    cy.wait(3000);

    cy.get('[data-testid="user-card"]')
      .should('have.attr', 'href');
  });
})