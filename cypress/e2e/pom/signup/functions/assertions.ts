/** SIGNUP ASSERTIONS */

import * as ele from '../elements/main.ts';
import * as utils from '../../../common/utils.ts';
import { SignupFields } from '../../types.js';

const getInput = (field: SignupFields['field']): Cypress.Chainable<JQuery<HTMLElement>> => {
  switch (field) {
    case 'firstname':
      return ele.getFirstNameInput();
    case 'lastname':
      return ele.getLastNameInput();
    case 'username':
      return ele.getUsernameInput();
    case 'password':
      return ele.getPasswordInput();
    case 'confirm password':
      return ele.getConfirmPasswordInput();
    default:
      throw new Error(`Invalid Signup field: ${field}`);
  }
};

const getInputError = (field: SignupFields['field']): Cypress.Chainable<JQuery<HTMLElement>> => {
  switch (field) {
    case 'firstname':
      return ele.getFirstNameInputError();
    case 'lastname':
      return ele.getLastNameInputError();
    case 'username':
      return ele.getUsernameInputError();
    case 'password':
      return ele.getPasswordInputError();
    case 'confirm password':
      return ele.getConfirmPasswordInputError();
    default:
      throw new Error(`Invalid Signup field: ${field}`);
  }
};

const assertSubmitErrorExists = (shouldExist: boolean): Cypress.Chainable<JQuery<HTMLElement>> =>
  utils.assertEleExists(shouldExist, ele.getSubmitError()).as('Assert - Submit error exists');

const assertSubmitErrorText = (expectedText: string): Cypress.Chainable<JQuery<HTMLElement>> =>
  utils.assertEleTextContains(ele.getSubmitError(), expectedText).as('Assert - Submit error text');

const assertPageLogoVisible = (isVisible: boolean): Cypress.Chainable<JQuery<HTMLElement>> =>
  utils.assertEleVisible(isVisible, ele.getPageLogo()).as('Assert - Page logo visibility');

const assertPageTitleVisible = (
  isVisible: boolean
): Cypress.Chainable<JQuery<HTMLHeadingElement>> =>
  utils.assertEleVisible(isVisible, ele.getPageTitle()).as('Assert - Page title visibility');

const assertInputVisible = (
  input: SignupFields['field'],
  isVisible: boolean
): Cypress.Chainable<JQuery<HTMLElement>> =>
  utils.assertEleVisible(isVisible, getInput(input)).as(`Assert - ${input} input visibility`);

const assertInputValueContains = (
  input: SignupFields['field'],
  expectedValue: string
): Cypress.Chainable<JQuery<HTMLElement>> =>
  utils
    .assertInputValueContains(getInput(input), expectedValue)
    .as(`Assert - ${input} input value`);

const assertInputErrorExists = (
  input: SignupFields['field'],
  shouldExist: boolean
): Cypress.Chainable<JQuery<HTMLElement>> =>
  utils.assertEleExists(shouldExist, getInputError(input)).as(`Assert - ${input} error exists`);

const assertInputErrorText = (
  input: SignupFields['field'],
  expectedText: string
): Cypress.Chainable<JQuery<HTMLElement>> =>
  utils
    .assertEleTextContains(getInputError(input), expectedText)
    .as(`Assert - ${input} error text`);

const assertSignupBtnDisabled = (isDisabled: boolean): Cypress.Chainable<JQuery<HTMLElement>> =>
  utils.assertEleDisabled(isDisabled, ele.getSignupBtn()).as('Assert - Sign-up button state');

const assertSignInLinkText = (expectedText: string): Cypress.Chainable<JQuery<HTMLAnchorElement>> =>
  utils.assertEleTextContains(ele.getSignInLink(), expectedText).as('Assert - Sign-in link text');

const assertSignInLinkHref = (expectedHref: string): Cypress.Chainable<JQuery<HTMLAnchorElement>> =>
  utils.assertLinkHrefContains(ele.getSignInLink(), expectedHref).as('Assert - Sign-in link href');

const assertSignupResponseCode = (expectedStatusCode: number): Cypress.Chainable<number> =>
  cy
    .get('@signup')
    .its('response.statusCode')
    .should('eq', expectedStatusCode)
    .as('Assert - Signup response code');

export {
  assertSubmitErrorExists,
  assertSubmitErrorText,
  assertPageLogoVisible,
  assertPageTitleVisible,
  assertInputVisible,
  assertInputValueContains,
  assertInputErrorExists,
  assertInputErrorText,
  assertSignupBtnDisabled,
  assertSignInLinkText,
  assertSignInLinkHref,
  assertSignupResponseCode,
};
