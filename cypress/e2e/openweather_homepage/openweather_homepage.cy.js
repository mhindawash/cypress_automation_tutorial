/// <reference types="cypress" />

// Asserting the navigation bars dropdown menus exist and work
describe('navigation bar cycled through', () => {
    // Visit the weather page, suppress the fetch & xhr from the command logs, and set the view port
    beforeEach(() => {
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false }); // suppress
        cy.viewport(1280, 720); // viewport
        cy.visit('https://openweathermap.org/'); // weather page
        cy.contains('button', '×').click();
        cy.wait(4000)
    });

    it('opens all the links in the navigation bar', () => {
        // Dashboard Link   
        cy.contains('Dashboard')
            .click();

        // API Link
        cy.contains('API')
            .click();
        cy.contains('Weather API')
            .should('exist');

        // Guide Link
        cy.get('#desktop-menu > :nth-child(2) > :nth-child(1) > a')
            .click();
        cy.contains('Guide')
    });

    it('error login checker', () => {
        // Login Page
        cy.get('.user-li > a')
            .click();
        cy.contains('Sign In To Your Account')
            .should('exist');

        // Invalid Credentials Error Message
        cy.get('.new_user > :nth-child(3) > #user_email')
            .type('somefakeemail@thisisntreal.com');
        cy.get('.new_user > :nth-child(5) > #user_password')
            .type('somemadeuppassword{enter}');
        cy.get(':nth-child(3) > .row > .col-md-6').contains('Invalid');
    });

    it('weather in your city search function', () => {
        cy.get('#desktop-menu > form > [name="q"]')
            .type('New York{enter}');
        cy.contains('a', 'New York City, US').click(); // finding the link based off the text of the link
        // cy.get('a[href="/city/5128581"]').click(); // direct element targeting for links
    });
});