export const getSubmitError = (): Cypress.Chainable<JQuery<HTMLElement>> =>
  cy.get('.MuiAlert-message');

export const getPageLogo = (): Cypress.Chainable<JQuery<HTMLElement>> =>
  cy.get('svg.SignUpForm-logo');

export const getPageTitle = (): Cypress.Chainable<JQuery<HTMLHeadingElement>> =>
  cy.get('[data-test="signup-title"]');

export const getFirstNameInput = (): Cypress.Chainable<JQuery<HTMLElement>> =>
  cy.get('[data-test="signup-first-name"] input');

export const getFirstNameInputError = (): Cypress.Chainable<JQuery<HTMLElement>> =>
  cy.get('[data-test="signup-first-name"] #firstName-helper-text');

export const getLastNameInput = (): Cypress.Chainable<JQuery<HTMLElement>> =>
  cy.get('[data-test="signup-last-name"] input');

export const getLastNameInputError = (): Cypress.Chainable<JQuery<HTMLElement>> =>
  cy.get('[data-test="signup-last-name"] #lastName-helper-text');

export const getUsernameInput = (): Cypress.Chainable<JQuery<HTMLElement>> =>
  cy.get('[data-test="signup-username"] input');

export const getUsernameInputError = (): Cypress.Chainable<JQuery<HTMLElement>> =>
  cy.get('[data-test="signup-username"] #username-helper-text');

export const getPasswordInput = (): Cypress.Chainable<JQuery<HTMLElement>> =>
  cy.get('[data-test="signup-password"] input');

export const getPasswordInputError = (): Cypress.Chainable<JQuery<HTMLElement>> =>
  cy.get('[data-test="signup-password"] #password-helper-text');

export const getConfirmPasswordInput = (): Cypress.Chainable<JQuery<HTMLElement>> =>
  cy.get('[data-test="signup-confirmPassword"] input');

export const getConfirmPasswordInputError = (): Cypress.Chainable<JQuery<HTMLElement>> =>
  cy.get('[data-test="signup-confirmPassword"] #confirmPassword-helper-text');

export const getSignupBtn = (): Cypress.Chainable<JQuery<HTMLElement>> =>
  cy.get('[data-test="signup-submit"]');

export const getSignInLink = (): Cypress.Chainable<JQuery<HTMLAnchorElement>> =>
  cy.get('a[href="/signin"]');
