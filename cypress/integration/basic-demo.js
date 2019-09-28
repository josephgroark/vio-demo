describe('Demo Visual Regression test', function () {
    it('checks for unintended css changes', function () {
        cy.visit('https://demo.viosystems.com/enterUsername')
        cy.get('#username')
            .type('Jimbo')
        cy.get('.button__submit-btn--next')
            .click()
        cy.percySnapshot()
    })
})