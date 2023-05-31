/// <reference types="cypress" />

// Assert the documentation button redirects the page
describe('documentation button modal', () => {
    it('', () => {
        cy.contains('Documentation').click()
        cy.wait(1000)
    })
})