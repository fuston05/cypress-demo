import * as ele from '../elements/main.ts';
import * as utils from '../../../common/utils.ts';

type SignupInput = 'firstName' | 'lastName' | 'username' | 'password' | 'confirmPassword';

const getInput = (input: SignupInput): Cypress.Chainable<JQuery<HTMLElement>> => {
  switch (input) {
    case 'firstName':
      return ele.getFirstNameInput();
    case 'lastName':
      return ele.getLastNameInput();
    case 'username':
      return ele.getUsernameInput();
    case 'password':
      return ele.getPasswordInput();
    case 'confirmPassword':
      return ele.getConfirmPasswordInput();
  }
};

const getInputError = (input: SignupInput): Cypress.Chainable<JQuery<HTMLElement>> => {
  switch (input) {
    case 'firstName':
      return ele.getFirstNameInputError();
    case 'lastName':
      return ele.getLastNameInputError();
    case 'username':
      return ele.getUsernameInputError();
    case 'password':
      return ele.getPasswordInputError();
    case 'confirmPassword':
      return ele.getConfirmPasswordInputError();
  }
};

const assertSubmitErrorExists = (shouldExist: boolean): Cypress.Chainable<JQuery<HTMLElement>> =>
  utils.assertEleExists(shouldExist, ele.getSubmitError());

const assertSubmitErrorText = (expectedText: string): Cypress.Chainable<JQuery<HTMLElement>> =>
  utils.assertEleTextContains(ele.getSubmitError(), expectedText);

const assertPageLogoVisible = (isVisible: boolean): Cypress.Chainable<JQuery<HTMLElement>> =>
  utils.assertEleVisible(isVisible, ele.getPageLogo());

const assertPageTitleVisible = (
  isVisible: boolean,
): Cypress.Chainable<JQuery<HTMLHeadingElement>> =>
  utils.assertEleVisible(isVisible, ele.getPageTitle());

const assertInputVisible = (
  input: SignupInput,
  isVisible: boolean,
): Cypress.Chainable<JQuery<HTMLElement>> => utils.assertEleVisible(isVisible, getInput(input));

const assertInputValueContains = (
  input: SignupInput,
  expectedValue: string,
): Cypress.Chainable<JQuery<HTMLElement>> =>
  utils.assertInputValueContains(getInput(input), expectedValue);

const assertInputErrorExists = (
  input: SignupInput,
  shouldExist: boolean,
): Cypress.Chainable<JQuery<HTMLElement>> =>
  utils.assertEleExists(shouldExist, getInputError(input));

const assertInputErrorText = (
  input: SignupInput,
  expectedText: string,
): Cypress.Chainable<JQuery<HTMLElement>> =>
  utils.assertEleTextContains(getInputError(input), expectedText);

const assertSignupBtnDisabled = (isDisabled: boolean): Cypress.Chainable<JQuery<HTMLElement>> =>
  utils.assertEleDisabled(isDisabled, ele.getSignupBtn());

const assertSignInLinkText = (expectedText: string): Cypress.Chainable<JQuery<HTMLAnchorElement>> =>
  utils.assertEleTextContains(ele.getSignInLink(), expectedText);

const assertSignInLinkHref = (expectedHref: string): Cypress.Chainable<JQuery<HTMLAnchorElement>> =>
  utils.assertLinkHrefContains(ele.getSignInLink(), expectedHref);

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
};
