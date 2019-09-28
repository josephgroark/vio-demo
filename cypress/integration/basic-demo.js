describe('Demo Visual Regression test', function () {
    it('checks for unintended css changes', function () {
        cy.visit('https://demo.viosystems.com/enterUsername')
        cy.basicVisualRegression()
    })
})