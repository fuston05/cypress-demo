import * as ele from '../elements/main.ts';
import * as utils from '../../../common/utils.ts';

export const blurUsernameInput = (): Cypress.Chainable<JQuery<HTMLElement>> =>
  ele.getUsernameInput().focus().blur();

export const typeIntoUsernameInput = (username: string): Cypress.Chainable<JQuery<HTMLElement>> =>
  utils.typeIntoInput(ele.getUsernameInput(), username);

export const typeConfiguredUsername = (): Cypress.Chainable<JQuery<HTMLElement>> =>
  cy.env(['username']).then(({ username }) => {
    if (typeof username !== 'string') {
      throw new Error('typeConfiguredUsername error: Username is not defined');
    }

    return typeIntoUsernameInput(username);
  });

export const blurPasswordInput = (): Cypress.Chainable<JQuery<HTMLElement>> =>
  ele.getPasswordInput().focus().blur();

export const typeIntoPasswordInput = (password: string): Cypress.Chainable<JQuery<HTMLElement>> =>
  utils.typeIntoInput(ele.getPasswordInput(), password, { log: false });

export const typeConfiguredPassword = (): Cypress.Chainable<JQuery<HTMLElement>> =>
  cy.env(['password']).then(({ password }) => {
    if (typeof password !== 'string') {
      throw new Error('typeConfiguredPassword error: Password is not defined');
    }

    return typeIntoPasswordInput(password);
  });

export const checkRememberMe = (isChecked: boolean): Cypress.Chainable<JQuery<HTMLElement>> =>
  isChecked ? ele.getRememberMeCheckbox().check() : ele.getRememberMeCheckbox().uncheck();

export const clickSigninBtn = (): Cypress.Chainable<JQuery<HTMLElement>> =>
  ele.getSigninBtn().click();

export const clickSignUpLink = (): Cypress.Chainable<JQuery<HTMLElement>> =>
  ele.getSignUpLink().click();
