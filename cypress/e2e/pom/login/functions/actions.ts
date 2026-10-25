import * as ele from '../elements/main.ts';
import * as utils from '../../../common/utils.ts';

const blurUsernameInput = (): Cypress.Chainable<JQuery<HTMLElement>> =>
  ele.getUsernameInput().focus().blur();

const typeIntoUsernameInput = (username: string): Cypress.Chainable<JQuery<HTMLElement>> =>
  utils.typeIntoInput(ele.getUsernameInput(), username);

const typeConfiguredUsername = (): Cypress.Chainable<JQuery<HTMLElement>> =>
  cy.env(['username']).then(({ username }) => {
    if (typeof username !== 'string') {
      throw new Error('typeConfiguredUsername error: Username is not defined');
    }

    return typeIntoUsernameInput(username);
  });

const blurPasswordInput = (): Cypress.Chainable<JQuery<HTMLElement>> =>
  ele.getPasswordInput().focus().blur();

const typeIntoPasswordInput = (password: string): Cypress.Chainable<JQuery<HTMLElement>> =>
  utils.typeIntoInput(ele.getPasswordInput(), password, { log: false });

const typeConfiguredPassword = (): Cypress.Chainable<JQuery<HTMLElement>> =>
  cy.env(['password']).then(({ password }) => {
    if (typeof password !== 'string') {
      throw new Error('typeConfiguredPassword error: Password is not defined');
    }

    return typeIntoPasswordInput(password);
  });

const checkRememberMe = (isChecked: boolean): Cypress.Chainable<JQuery<HTMLElement>> =>
  isChecked ? ele.getRememberMeCheckbox().check() : ele.getRememberMeCheckbox().uncheck();

/**
 * @associatedEndpoints "/login"
 */
const clickSigninBtn = (): Cypress.Chainable<JQuery<HTMLElement>> => ele.getSigninBtn().click();

const clickSignUpLink = (): Cypress.Chainable<JQuery<HTMLAnchorElement>> =>
  ele.getSignUpLink().click();

export {
  blurUsernameInput,
  typeIntoUsernameInput,
  typeConfiguredUsername,
  blurPasswordInput,
  typeIntoPasswordInput,
  typeConfiguredPassword,
  checkRememberMe,
  clickSigninBtn,
  clickSignUpLink,
};
