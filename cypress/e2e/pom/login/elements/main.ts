export const getSubmitError = (): Cypress.Chainable<JQuery<HTMLElement>> =>
  cy.get('.MuiAlert-message');

export const getPageLogo = (): Cypress.Chainable<JQuery<HTMLElement>> =>
  cy.get('svg.SignInForm-logo');

export const getPageTitle = (): Cypress.Chainable<JQuery<HTMLHeadingElement>> => cy.get('h1');

export const getUsernameInput = (): Cypress.Chainable<JQuery<HTMLElement>> =>
  cy.get('[data-test="signin-username"] input');

export const getUsernameInputError = (): Cypress.Chainable<JQuery<HTMLElement>> =>
  cy.get('[data-test="signin-username"] #username-helper-text');

export const getPasswordInput = (): Cypress.Chainable<JQuery<HTMLElement>> =>
  cy.get('[data-test="signin-password"] input');

export const getPasswordInputError = (): Cypress.Chainable<JQuery<HTMLElement>> =>
  cy.get('[data-test="signin-password"] #password-helper-text');

export const getRememberMeCheckbox = (): Cypress.Chainable<JQuery<HTMLElement>> =>
  cy.get('[data-test="signin-remember-me"] input');

export const getSigninBtn = (): Cypress.Chainable<JQuery<HTMLElement>> =>
  cy.get('[data-test="signin-submit"]');

export const getSignUpLink = (): Cypress.Chainable<JQuery<HTMLAnchorElement>> =>
  cy.get('[data-test="signup"]');
