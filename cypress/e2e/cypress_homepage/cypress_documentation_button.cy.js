/// <reference types="cypress" />

// Assert the documentation button redirects the page
describe('documentation button modal', () => {
    // Opens cypress landing page
    it('open cypress homepage', () => {
        cy.visit('www.cypress.io')
            .wait(1000)
    })
    
    // Clicks on the documentation button
    it('click the documentation button', () => {
        cy.get(':nth-child(1) > .fluid-container')
            .contains('Documentation').click()
            .wait(1000)
    })

    // Asserting the Cypress documentation is open
    it('verify documentation button opened', () => {
        cy.get('h1')
            .contains('Why Cypress')
            .should('exist')
    })

    // Returns to cypress landing page
    it('reopen cypress homepage', () => {
        cy.visit('www.cypress.io')
            .get(':nth-child(1) > .fluid-container')
            .contains(' Test. Automate. ')
            .should('exist')
    })
    
})