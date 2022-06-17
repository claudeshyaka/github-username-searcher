describe('error page', () => {
  beforeEach(() => {
      cy.visit('/33434ddf');
  });

  it('show 404 page', () => {
    cy.get('[data-testid="back-home"]')
      .should('have.attr', 'href')
      .and('eq', '/');
  });
});