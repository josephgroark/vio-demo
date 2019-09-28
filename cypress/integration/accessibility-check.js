describe('Demo Visual Regression test', function () {
    beforeEach(() => {
        cy.visit('https://demo.viosystems.com/enterUsername')
        cy.injectAxe()
    })
    it('Has no detectable a11y violations on load (custom configuration)', () => {
        cy.checkA11y()
    })
})