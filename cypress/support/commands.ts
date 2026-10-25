// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./commands.d.ts" />

Cypress.Commands.add('typePassword', (element: Cypress.Chainable<JQuery<HTMLElement>>) => {
  cy.env(['password']).then(({ password }) => {
    if (password === undefined) throw new Error('typePassword error: Password is not defined');
    return element.clear().type(password, { log: false });
  });
});

Cypress.Commands.add('typeUsername', (element: Cypress.Chainable<JQuery<HTMLElement>>) => {
  cy.env(['username']).then(({ username }) => {
    if (username === undefined) throw new Error('typeUsername error: Username is not defined');
    return element.type(username);
  });
});
