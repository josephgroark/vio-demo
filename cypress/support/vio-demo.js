Cypress.Commands.add('basicVisualRegression', () => {
    cy.get('#username')
        .type('Jimbo')
    cy.get('.button__submit-btn--next')
        .click()
    cy.url()
        .should('include', '/ProfileDetails')
    cy.percySnapshot()
});

Cypress.Commands.add('checkA11y', () => {
    // Configure aXe and test the page at initial load
    cy.configureAxe({
        branding: {
            brand: String,
            application: String
        },
        reporter: "option",
        checks: [Object],
        rules: [Object],
        locale: Object
    })
    cy.checkA11y()
});