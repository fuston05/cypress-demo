import * as ele from '../elements/main.ts';
import * as utils from '../../../common/utils.ts';

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
  input: 'username' | 'password',
  isVisible: boolean
): Cypress.Chainable<JQuery<HTMLElement>> =>
  utils
    .assertEleVisible(
      isVisible,
      input === 'username' ? ele.getUsernameInput() : ele.getPasswordInput()
    )
    .as(`Assert - ${input} input visibility`);

const assertInputValueContains = (
  input: 'username' | 'password',
  expectedValue: string
): Cypress.Chainable<JQuery<HTMLElement>> =>
  utils
    .assertInputValueContains(
      input === 'username' ? ele.getUsernameInput() : ele.getPasswordInput(),
      expectedValue
    )
    .as(`Assert - ${input} input value`);

const assertUsernameErrorText = (expectedError: string): Cypress.Chainable<JQuery<HTMLElement>> =>
  utils
    .assertEleTextContains(ele.getUsernameInputError(), expectedError)
    .as('Assert - Username error text');

const assertUsernameErrorExists = (shouldExist: boolean): Cypress.Chainable<JQuery<HTMLElement>> =>
  utils
    .assertEleExists(shouldExist, ele.getUsernameInputError())
    .as('Assert - Username error exists');

const assertPasswordErrorText = (expectedError: string): Cypress.Chainable<JQuery<HTMLElement>> =>
  utils
    .assertEleTextContains(ele.getPasswordInputError(), expectedError)
    .as('Assert - Password error text');

const assertPasswordErrorExists = (shouldExist: boolean): Cypress.Chainable<JQuery<HTMLElement>> =>
  utils
    .assertEleExists(shouldExist, ele.getPasswordInputError())
    .as('Assert - Password error exists');

const assertLoginResponseCode = (expectedStatusCode: number): Cypress.Chainable<number> =>
  cy
    .get('@login')
    .its('response.statusCode')
    .should('eq', expectedStatusCode)
    .as('Assert - Login response code');

const assertRememberMeChecked = (isChecked: boolean): Cypress.Chainable<JQuery<HTMLElement>> =>
  utils
    .assertCheckboxChecked(isChecked, ele.getRememberMeCheckbox())
    .as('Assert - Remember me checkbox state');

const assertRemberMeCookie = (
  isRememberMeChecked: boolean
): Cypress.Chainable<Cypress.Cookie | null> =>
  utils
    .assertCookieExpires('connect.sid', isRememberMeChecked ? 'persistent' : 'session')
    .as('Assert - Remember me cookie expiration');

const assertRememberMeCookieExists = (
  shouldExist: boolean
): Cypress.Chainable<Cypress.Cookie | null> =>
  utils.assertCookieExists('connect.sid', shouldExist).as('Assert - Remember me cookie exists');

const assertSigninBtnDisabled = (isDisabled: boolean): Cypress.Chainable<JQuery<HTMLElement>> =>
  utils.assertEleDisabled(isDisabled, ele.getSigninBtn()).as('Assert - Sign-in button state');

const assertSignupLinkText = (expectedText: string): Cypress.Chainable<JQuery<HTMLAnchorElement>> =>
  utils.assertEleTextContains(ele.getSignUpLink(), expectedText).as('Assert - Sign-up link text');

const assertSignupLinkHref = (expectedHref: string): Cypress.Chainable<JQuery<HTMLAnchorElement>> =>
  utils.assertLinkHrefContains(ele.getSignUpLink(), expectedHref).as('Assert - Sign-up link href');

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
