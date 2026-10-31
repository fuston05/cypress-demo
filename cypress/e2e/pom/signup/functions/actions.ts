/** SIGNUP ACTIONS */

import * as ele from '../elements/main.ts';
import * as utils from '../../../common/utils.ts';

const blurFirstNameInput = (): Cypress.Chainable<JQuery<HTMLElement>> =>
  ele.getFirstNameInput().focus().blur();

const typeIntoFirstNameInput = (firstName: string): Cypress.Chainable<JQuery<HTMLElement>> =>
  utils.typeIntoInput(ele.getFirstNameInput(), firstName);

const blurLastNameInput = (): Cypress.Chainable<JQuery<HTMLElement>> =>
  ele.getLastNameInput().focus().blur();

const typeIntoLastNameInput = (lastName: string): Cypress.Chainable<JQuery<HTMLElement>> =>
  utils.typeIntoInput(ele.getLastNameInput(), lastName);

const blurUsernameInput = (): Cypress.Chainable<JQuery<HTMLElement>> =>
  ele.getUsernameInput().focus().blur();

const typeIntoUsernameInput = (username: string): Cypress.Chainable<JQuery<HTMLElement>> =>
  utils.typeIntoInput(ele.getUsernameInput(), username);

const blurPasswordInput = (): Cypress.Chainable<JQuery<HTMLElement>> =>
  ele.getPasswordInput().focus().blur();

const typeIntoPasswordInput = (password: string): Cypress.Chainable<JQuery<HTMLElement>> =>
  utils.typeIntoInput(ele.getPasswordInput(), password, { log: false });

const blurConfirmPasswordInput = (): Cypress.Chainable<JQuery<HTMLElement>> =>
  ele.getConfirmPasswordInput().focus().blur();

const typeIntoConfirmPasswordInput = (password: string): Cypress.Chainable<JQuery<HTMLElement>> =>
  utils.typeIntoInput(ele.getConfirmPasswordInput(), password, { log: false });

/**
 * @associatedEndpoints "/signup"
 */
const clickSignupBtn = (): Cypress.Chainable<JQuery<HTMLElement>> => ele.getSignupBtn().click();

const clickSignInLink = (): Cypress.Chainable<JQuery<HTMLAnchorElement>> =>
  ele.getSignInLink().click();

export {
  blurFirstNameInput,
  typeIntoFirstNameInput,
  blurLastNameInput,
  typeIntoLastNameInput,
  blurUsernameInput,
  typeIntoUsernameInput,
  blurPasswordInput,
  typeIntoPasswordInput,
  blurConfirmPasswordInput,
  typeIntoConfirmPasswordInput,
  clickSignupBtn,
  clickSignInLink,
};
