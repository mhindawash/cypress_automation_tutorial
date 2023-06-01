/// <reference types="cypress" />

// Assert npm install modal opens and closes
describe('npm install modal pops up', () => {
    it('opens npm install window and closes it', () => {
        // Loading the cypress landing page
        cy.visit('www.cypress.io')
            .wait(1000)
    })

        // Click the npm install cypress button
    it('opens the npm install modal', () => {
        cy.contains('npm install cypress').click()
            .wait(1000)    
    })    
    
        // Click the 'x' button to close the npm install window
    it('closes the npm install modal', () => {
        cy.get('.shrink-0 > .group').click()
            .wait(1000)
    })    
    
})