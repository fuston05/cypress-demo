/** LOGIN ACTIONS */

import * as ele from '../elements/main.ts';
import * as utils from '../../../common/utils.ts';

const blurUsernameInput = (): Cypress.Chainable<JQuery<HTMLElement>> =>
  ele.getUsernameInput().focus().blur().as('Blur - Username input');

const typeIntoUsernameInput = (username: string): Cypress.Chainable<JQuery<HTMLElement>> =>
  utils.typeIntoInput(ele.getUsernameInput(), username).as('Type - Username');

const typeConfiguredUsername = (): Cypress.Chainable<JQuery<HTMLElement>> =>
  cy
    .env(['username'])
    .as('Type - Configured username')
    .then(({ username }) => {
      if (typeof username !== 'string') {
        throw new Error('typeConfiguredUsername error: Username is not defined');
      }

      return typeIntoUsernameInput(username);
    });

const blurPasswordInput = (): Cypress.Chainable<JQuery<HTMLElement>> =>
  ele.getPasswordInput().focus().blur().as('Blur - Password input');

const typeIntoPasswordInput = (password: string): Cypress.Chainable<JQuery<HTMLElement>> =>
  utils.typeIntoInput(ele.getPasswordInput(), password, { log: false }).as('Type - Password');

const typeConfiguredPassword = (): Cypress.Chainable<JQuery<HTMLElement>> =>
  cy
    .env(['password'])
    .as('Type - Configured password')
    .then(({ password }) => {
      if (typeof password !== 'string') {
        throw new Error('typeConfiguredPassword error: Password is not defined');
      }

      return typeIntoPasswordInput(password);
    });

const checkRememberMe = (isChecked: boolean): Cypress.Chainable<JQuery<HTMLElement>> =>
  (isChecked ? ele.getRememberMeCheckbox().check() : ele.getRememberMeCheckbox().uncheck()).as(
    `${isChecked ? 'Check' : 'Uncheck'} - Remember me checkbox`
  );

/**
 * @associatedEndpoints "/login"
 */
const clickSigninBtn = (): Cypress.Chainable<JQuery<HTMLElement>> =>
  ele.getSigninBtn().click().as('Click - Sign-in button');

const clickSignUpLink = (): Cypress.Chainable<JQuery<HTMLAnchorElement>> =>
  ele.getSignUpLink().click().as('Click - Sign-up link');

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
