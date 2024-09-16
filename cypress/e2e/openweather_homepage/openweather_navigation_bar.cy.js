/// <reference types="cypress" />

// Asserting the navigation bars dropdown menus exist and work
describe('navigation bar dropdowns', () => {
    it('opens all the dropdown menus for the navigation bar', () => {
        // Set the viewport to a specific size to show the full navigation bar
        cy.viewport(1280, 720); // Normal Screen Resolution

        // Loading the homepage for openweathermap
        cy.visit('https://openweathermap.org/')
            .wait(1000)

        // Opening the Dashboard    
        cy.get('#desktop-menu > :nth-child(2) > :nth-child(3) > a')
        
        cy.get('.nav-bar > .relative > :nth-child(1)')
            .should('exist')
            .wait(1000)
            .trigger('mouseover')
            .contains('Cypress App')  
    }) 
})