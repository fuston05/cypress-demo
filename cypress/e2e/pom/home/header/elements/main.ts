/** HOME / HEADER ELEMENTS */

// use data-test attr when possible

export const getHamburgerMenuBtn = (): Cypress.Chainable<JQuery<HTMLElement>> =>
  cy.get('[data-test="sidenav-toggle"]');

export const getTopNav = (): Cypress.Chainable<JQuery<HTMLElement>> =>
  cy.get('header [role="tablist"]');

export const getEveryoneNavBtn = (): Cypress.Chainable<JQuery<HTMLElement>> =>
  cy.get('[data-test="nav-public-tab"]');

export const getFriendsNavBtn = (): Cypress.Chainable<JQuery<HTMLElement>> =>
  cy.get('[data-test="nav-contacts-tab"]');

export const getMineNavBtn = (): Cypress.Chainable<JQuery<HTMLElement>> =>
  cy.get('[data-test="nav-personal-tab"]');

export const getNewBtn = (): Cypress.Chainable<JQuery<HTMLElement>> =>
  cy.get('[data-test="nav-top-new-transaction"]');

export const getNotificationsBtn = (): Cypress.Chainable<JQuery<HTMLElement>> =>
  cy.get('[data-test="nav-top-notifications-link"]');

export const getNewNotificationsCount = (): Cypress.Chainable<JQuery<HTMLElement>> =>
  cy.get('[data-test="nav-top-notifications-count"]');
