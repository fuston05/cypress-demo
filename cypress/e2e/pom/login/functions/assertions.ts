import * as ele from '../elements/main.ts';
import * as utils from '../../../common/utils.ts';

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
  input: 'username' | 'password',
  isVisible: boolean,
): Cypress.Chainable<JQuery<HTMLElement>> =>
  utils.assertEleVisible(
    isVisible,
    input === 'username' ? ele.getUsernameInput() : ele.getPasswordInput(),
  );

const assertInputValueContains = (
  input: 'username' | 'password',
  expectedValue: string,
): Cypress.Chainable<JQuery<HTMLElement>> =>
  utils.assertInputValueContains(
    input === 'username' ? ele.getUsernameInput() : ele.getPasswordInput(),
    expectedValue,
  );

const assertRememberMeChecked = (isChecked: boolean): Cypress.Chainable<JQuery<HTMLElement>> =>
  utils.assertCheckboxChecked(isChecked, ele.getRememberMeCheckbox());

const assertSigninBtnDisabled = (isDisabled: boolean): Cypress.Chainable<JQuery<HTMLElement>> =>
  utils.assertEleDisabled(isDisabled, ele.getSigninBtn());

const assertSignupLinkText = (expectedText: string): Cypress.Chainable<JQuery<HTMLAnchorElement>> =>
  utils.assertEleTextContains(ele.getSignUpLink(), expectedText);

const assertSignupLinkHref = (expectedHref: string): Cypress.Chainable<JQuery<HTMLAnchorElement>> =>
  utils.assertLinkHrefContains(ele.getSignUpLink(), expectedHref);

export {
  assertSubmitErrorExists,
  assertSubmitErrorText,
  assertPageLogoVisible,
  assertPageTitleVisible,
  assertInputVisible,
  assertInputValueContains,
  assertRememberMeChecked,
  assertSigninBtnDisabled,
  assertSignupLinkText,
  assertSignupLinkHref,
};
