describe('Demo Visual Regression test', function () {
    beforeEach(() => {
        cy.visit('https://demo.viosystems.com/enterUsername')
        cy.injectAxe()
    })
    it('checks for unintended css changes', function () {
        cy.basicVisualRegression()
    })

    it('Has no detectable a11y violations on load (custom configuration)', () => {
        cy.checkA11y()
    })

    it('can login with route', () =>{
        cy.loginUserName()
    })
})