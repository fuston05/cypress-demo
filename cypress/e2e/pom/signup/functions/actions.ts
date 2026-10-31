/** SIGNUP ACTIONS */

import * as ele from '../elements/main.ts';
import * as utils from '../../../common/utils.ts';
import { SignupFields } from '../../types.js';

const blurFirstNameInput = (): Cypress.Chainable<JQuery<HTMLElement>> =>
  ele.getFirstNameInput().focus().blur().as('Blur - First name input');

const typeIntoFirstNameInput = (firstName: string): Cypress.Chainable<JQuery<HTMLElement>> =>
  utils.typeIntoInput(ele.getFirstNameInput(), firstName).as('Type - First name');

const blurLastNameInput = (): Cypress.Chainable<JQuery<HTMLElement>> =>
  ele.getLastNameInput().focus().blur().as('Blur - Last name input');

const typeIntoLastNameInput = (lastName: string): Cypress.Chainable<JQuery<HTMLElement>> =>
  utils.typeIntoInput(ele.getLastNameInput(), lastName).as('Type - Last name');

const blurUsernameInput = (): Cypress.Chainable<JQuery<HTMLElement>> =>
  ele.getUsernameInput().focus().blur().as('Blur - Username input');

const typeIntoUsernameInput = (username: string): Cypress.Chainable<JQuery<HTMLElement>> =>
  utils.typeIntoInput(ele.getUsernameInput(), username).as('Type - Username');

const blurPasswordInput = (): Cypress.Chainable<JQuery<HTMLElement>> =>
  ele.getPasswordInput().focus().blur().as('Blur - Password input');

const typeIntoPasswordInput = (password: string): Cypress.Chainable<JQuery<HTMLElement>> =>
  utils.typeIntoInput(ele.getPasswordInput(), password, { log: false }).as('Type - Password');

const blurConfirmPasswordInput = (): Cypress.Chainable<JQuery<HTMLElement>> =>
  ele.getConfirmPasswordInput().focus().blur().as('Blur - Confirm password input');

const typeIntoConfirmPasswordInput = (password: string): Cypress.Chainable<JQuery<HTMLElement>> =>
  utils
    .typeIntoInput(ele.getConfirmPasswordInput(), password, { log: false })
    .as('Type - Confirm password');

/**
 * @associatedEndpoints "/signup"
 */
const clickSignupBtn = (): Cypress.Chainable<JQuery<HTMLElement>> =>
  ele.getSignupBtn().click().as('Click - Sign-up button');

const clickSignInLink = (): Cypress.Chainable<JQuery<HTMLAnchorElement>> =>
  ele.getSignInLink().click().as('Click - Sign-in link');

const blurField = (field: SignupFields['field']) => {
  switch (field.toLowerCase()) {
    case 'firstname':
      blurFirstNameInput();
      break;
    case 'lastname':
      blurLastNameInput();
      break;
    case 'username':
      blurUsernameInput();
      break;
    case 'password':
      blurPasswordInput();
      break;
    case 'confirm password':
      blurConfirmPasswordInput();
      break;
    default:
      throw new Error(`Unknow field: ${field}`);
  }
};

const typeIntoField = (text: string, field: SignupFields['field']) => {
  switch (field.toLowerCase()) {
    case 'firstname':
      typeIntoFirstNameInput(text);
      break;
    case 'lastname':
      typeIntoLastNameInput(text);
      break;
    case 'username':
      typeIntoUsernameInput(text);
      break;
    case 'password':
      typeIntoPasswordInput(text);
      break;
    case 'confirm password':
      typeIntoConfirmPasswordInput(text);
      break;
    default:
      throw new Error(`Invalid field: ${field}`);
  }
};

export {
  blurFirstNameInput,
  blurLastNameInput,
  blurUsernameInput,
  blurPasswordInput,
  blurConfirmPasswordInput,
  blurField,
  typeIntoFirstNameInput,
  typeIntoLastNameInput,
  typeIntoUsernameInput,
  typeIntoPasswordInput,
  typeIntoConfirmPasswordInput,
  typeIntoField,
  clickSignupBtn,
  clickSignInLink,
};
