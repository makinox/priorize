/// <reference types="cypress" />

export default context('Login', () => {
  it('Its login page', () => {
    cy.visit(Cypress.env('BASE_URL'));
    cy.location('pathname').should('include', '/');
  });

  describe('Layout', () => {
    it('Navbar should be visible', () => {
      cy.get('body nav').should('be.visible').should('have.length', 1);
    });

    it('Navbar should only have 3 links', () => {
      cy.get('body nav div a').should('be.visible').should('have.length', 3);
    });

    it('Form should be visible', () => {
      cy.get('form').should('be.visible').should('have.length', 1);
    });
  });

  describe('Actions', () => {
    it('Navbar first link should redirect', () => {
      cy.get('body nav div a:nth-child(1)').should('have.attr', 'target', '_blank');
    });

    it('Navbar second link should redirect', () => {
      cy.get('body nav div a:nth-child(2)').should('have.attr', 'target', '_blank');
    });

    it('Navbar third link should redirect', () => {
      cy.get('body nav div a:nth-child(3)').should('have.attr', 'target', '_blank');
    });

    it('Should be 4 initial tasks', () => {
      cy.get('.task > div').should('have.length', 4);
    });

    it('Form should create a new task', () => {
      cy.get('form div:nth-child(1) input').type('Cy title');
      cy.get('form div:nth-child(2) input').type('Responsable');
      cy.get('form div:nth-child(3) input').type('Description');
      cy.get('form button').click();
      cy.get('.task > div:last div h4').should('contain', 'Cy title');
    });

    it('Confirm borrar true', () => {
      cy.get('.task > div:last button').click();
      cy.on('window:confirm', () => true);
      cy.get('.task > div').should('have.length', 4);
    });

    it('Handling JS Confirm - Click Cancel', () => {
      cy.get('.task > div:last button').click();
      cy.on('window:confirm', () => false);
      cy.get('.task > div').should('have.length', 4);
    });
  });
});
