/// <reference types="cypress" />

declare global {
    namespace Cypress {
        interface Chainable {
            typePassword(element: Chainable<JQuery<HTMLElement>>): Chainable<JQuery<HTMLElement>>;
            typeUsername(element: Chainable<JQuery<HTMLElement>>): Chainable<JQuery<HTMLElement>>;
        }
    }
}

export { }