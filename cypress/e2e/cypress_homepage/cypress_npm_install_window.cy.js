/// <reference types="cypress" />

// Assert npm install window opens and closes
describe('npm install window', () => {
    it('opens npm install window and closes it', () => {
        // Loading the cypress landing page
        cy.visit('www.cypress.io')
        cy.wait(1000)

        // Click the npm install cypress button
        cy.contains('npm install cypress').click()
        cy.wait(1000)

        // Click the 'x' button to close the npm install window
        cy.get('.shrink-0 > .group').click()
        cy.wait(1000)
    })
})