describe('My First Test', () => {
  it('Visits Neflix React App Page', () => {
    cy.visit('http://localhost:8080/');
    cy.url().should('include', '/search');
    cy.get('.netflix-app__search').should('have.text', '')
  })

  it('Search changes should reflect on url', () => {
    cy.visit('http://localhost:8080/');
    cy.get('.netflix-app__search').type('Enot')
    cy.get('.netflix-app__search-button').click();
    cy.url().should('include', 'search?searchQuery=Enot');
  })
})
