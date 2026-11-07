/** HOME / SIDE NAVIGATION ELEMENTS */

export const getSideNav = (): Cypress.Chainable<JQuery<HTMLElement>> =>
  cy.get('[data-test="sidenav"]');

export const getUserImg = (): Cypress.Chainable<JQuery<HTMLImageElement>> =>
  getSideNav().find('img');

export const getUserFullName = (): Cypress.Chainable<JQuery<HTMLElement>> =>
  cy.get('[data-test="sidenav-user-full-name"]');

export const getUsername = (): Cypress.Chainable<JQuery<HTMLElement>> =>
  cy.get('[data-test="sidenav-username"]');

export const getUserBalance = (): Cypress.Chainable<JQuery<HTMLElement>> =>
  cy.get('[data-test="sidenav-user-balance"]');

export const getHomeBtn = (): Cypress.Chainable<JQuery<HTMLAnchorElement>> =>
  cy.get('[data-test="sidenav-home"]');

export const getMyAccountBtn = (): Cypress.Chainable<JQuery<HTMLAnchorElement>> =>
  cy.get('[data-test="sidenav-user-settings"]');

export const getBankAccountsBtn = (): Cypress.Chainable<JQuery<HTMLAnchorElement>> =>
  cy.get('[data-test="sidenav-bankaccounts"]');

export const getNotificationsBtn = (): Cypress.Chainable<JQuery<HTMLAnchorElement>> =>
  cy.get('[data-test="sidenav-notifications"]');

export const getLogoutBtn = (): Cypress.Chainable<JQuery<HTMLElement>> =>
  cy.get('[data-test="sidenav-signout"]');
