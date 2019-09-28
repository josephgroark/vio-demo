describe('Demo Visual Regression test', function () {
    beforeEach(() => {
        cy.visit('https://demo.viosystems.com/enterUsername')
        cy.injectAxe()
    })
    it('checks for unintended css changes', function () {
        cy.visit('https://demo.viosystems.com/enterUsername')
        cy.get('#username')
            .type('Jimbo')
        cy.get('.button__submit-btn--next')
            .click()
        cy.url()
            .should('include', '/ProfileDetails')
        cy.percySnapshot()
    })

    it('Has no detectable a11y violations on load (custom configuration)', () => {
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
      })
})