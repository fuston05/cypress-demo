import * as ele from '../elements/main.ts';
import * as utils from '../../../common/utils.ts';

const assertSubmitErrorExists = (shouldExist: boolean): Cypress.Chainable<JQuery<HTMLElement>> =>
  utils.assertEleExists(shouldExist, ele.getSubmitError());

const assertSubmitErrorText = (expectedText: string): Cypress.Chainable<JQuery<HTMLElement>> =>
  utils.assertEleTextContains(ele.getSubmitError(), expectedText);

const assertPageLogoVisible = (isVisible: boolean): Cypress.Chainable<JQuery<HTMLElement>> =>
  utils.assertEleVisible(isVisible, ele.getPageLogo());

const assertPageTitleVisible = (
  isVisible: boolean
): Cypress.Chainable<JQuery<HTMLHeadingElement>> =>
  utils.assertEleVisible(isVisible, ele.getPageTitle());

const assertInputVisible = (
  input: 'username' | 'password',
  isVisible: boolean
): Cypress.Chainable<JQuery<HTMLElement>> =>
  utils.assertEleVisible(
    isVisible,
    input === 'username' ? ele.getUsernameInput() : ele.getPasswordInput()
  );

const assertInputValueContains = (
  input: 'username' | 'password',
  expectedValue: string
): Cypress.Chainable<JQuery<HTMLElement>> =>
  utils.assertInputValueContains(
    input === 'username' ? ele.getUsernameInput() : ele.getPasswordInput(),
    expectedValue
  );

const assertUsernameErrorText = (expectedError: string): Cypress.Chainable<JQuery<HTMLElement>> =>
  utils.assertEleTextContains(ele.getUsernameInputError(), expectedError);

const assertUsernameErrorExists = (shouldExist: boolean): Cypress.Chainable<JQuery<HTMLElement>> =>
  utils.assertEleExists(shouldExist, ele.getUsernameInputError());

const assertPasswordErrorText = (expectedError: string): Cypress.Chainable<JQuery<HTMLElement>> =>
  utils.assertEleTextContains(ele.getPasswordInputError(), expectedError);

const assertPasswordErrorExists = (shouldExist: boolean): Cypress.Chainable<JQuery<HTMLElement>> =>
  utils.assertEleExists(shouldExist, ele.getPasswordInputError());

const assertLoginResponseCode = (expectedStatusCode: number): Cypress.Chainable<number> =>
  cy.get('@login').its('response.statusCode').should('eq', expectedStatusCode);

const assertRememberMeChecked = (isChecked: boolean): Cypress.Chainable<JQuery<HTMLElement>> =>
  utils.assertCheckboxChecked(isChecked, ele.getRememberMeCheckbox());

const assertRemberMeCookie = (
  isRememberMeChecked: boolean
): Cypress.Chainable<Cypress.Cookie | null> =>
  utils.assertCookieExpires('connect.sid', isRememberMeChecked ? 'persistent' : 'session');

const assertRememberMeCookieExists = (
  shouldExist: boolean
): Cypress.Chainable<Cypress.Cookie | null> => utils.assertCookieExists('connect.sid', shouldExist);

const assertSigninBtnDisabled = (isDisabled: boolean): Cypress.Chainable<JQuery<HTMLElement>> =>
  utils.assertEleDisabled(isDisabled, ele.getSigninBtn());

const assertSignupLinkText = (expectedText: string): Cypress.Chainable<JQuery<HTMLAnchorElement>> =>
  utils.assertEleTextContains(ele.getSignUpLink(), expectedText);

const assertSignupLinkHref = (expectedHref: string): Cypress.Chainable<JQuery<HTMLAnchorElement>> =>
  utils.assertLinkHrefContains(ele.getSignUpLink(), expectedHref);

export {
  assertSubmitErrorExists,
  assertSubmitErrorText,
  assertUsernameErrorText,
  assertUsernameErrorExists,
  assertPasswordErrorText,
  assertPasswordErrorExists,
  assertLoginResponseCode,
  assertPageLogoVisible,
  assertPageTitleVisible,
  assertInputVisible,
  assertInputValueContains,
  assertRememberMeChecked,
  assertRemberMeCookie,
  assertRememberMeCookieExists,
  assertSigninBtnDisabled,
  assertSignupLinkText,
  assertSignupLinkHref,
};
