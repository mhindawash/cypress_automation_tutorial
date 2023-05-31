/// <reference types="cypress" />

// Asserting the navigation bars dropdown menus exist and work
describe('navigation bar dropdowns', () => {
    it('opens all the dropdown menus for the navigation bar', () => {
        // Loading the 'Product' dropdown menu
        cy.visit('www.cypress.io')
        cy.get('.nav-bar > .relative > :nth-child(1)')
            .should('exist')
            .wait(1000)
            .trigger('mouseover')
            .contains('Cypress App') 

        // Loading the 'Docs' dropdown menu
        cy.get('.nav-bar > .relative > :nth-child(2)')
            .should('exist')
            .wait(1000)
            .trigger('mouseover')
            .contains('Documentation') 

        // Loading the 'Community' dropdown menu    
        cy.get('.nav-bar > .relative > :nth-child(3)')
            .should('exist')
            .wait(1000)
            .trigger('mouseover')
            .contains('Blog') 
        
        // Loading the 'Company' dropdown menu
        cy.get('.nav-bar > .relative > :nth-child(4)')
            .should('exist')
            .wait(1000)
            .trigger('mouseover')
            .contains('About Cypress') 
    }) 
})