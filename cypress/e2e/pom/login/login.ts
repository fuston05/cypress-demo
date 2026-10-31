import { Then, When } from '@badeball/cypress-cucumber-preprocessor';
import * as login from '../login/all.ts';

When('I type the configured username into the username field', () =>
  login.actions.typeConfiguredUsername()
);

When('I type the configured password into the password field', () =>
  login.actions.typeConfiguredPassword()
);

When('I type {string} into the {string} field', (info: string, field: 'username' | 'password') => {
  if (field === 'username') return login.actions.typeIntoUsernameInput(info);

  if (field === 'password') return login.actions.typeIntoPasswordInput(info);

  throw new Error(`Unsupported login field: ${field}`);
});

When('I {string} the remember me checkbox', (checkAction: 'check' | 'uncheck') =>
  login.actions.checkRememberMe(checkAction === 'check')
);

When('I blur the username field to trigger the error', () => login.actions.blurUsernameInput());

When('I click the signin button', () => {
  login.actions.clickSigninBtn().wait('@login');
});

/** ********************* ASSERTIONS *********************** */
/** ******************************************************** */

Then(
  'I assert the {string} error contains {string}',
  (errorType: 'username' | 'password' | 'submit', error: string) => {
    if (errorType === 'username') return login.assertions.assertUsernameErrorText(error);

    if (errorType === 'password') return login.assertions.assertPasswordErrorText(error);

    if (errorType === 'submit') return login.assertions.assertSubmitErrorText(error);

    throw new Error(`Unsupported error type: ${errorType}`);
  }
);

Then(
  'I assert the {string} error {string} exist',
  (errorType: 'username' | 'password' | 'submit', assertion: 'should' | 'should not') => {
    if (errorType === 'username')
      return login.assertions.assertUsernameErrorExists(assertion === 'should');

    if (errorType === 'password')
      return login.assertions.assertPasswordErrorExists(assertion === 'should');

    if (errorType === 'submit')
      return login.assertions.assertSubmitErrorExists(assertion === 'should');

    throw new Error('Unsupported error type');
  }
);

Then('I assert the signin button is {string}', (state: 'enabled' | 'disabled') =>
  login.assertions.assertSigninBtnDisabled(state === 'disabled')
);

Then('I assert the signup link text contains {string}', (expectedUrlText: string) =>
  login.assertions.assertSignupLinkText(expectedUrlText)
);

Then('I assert the signup link HREF contains {string}', (expectedHref: string) =>
  login.assertions.assertSignupLinkHref(expectedHref)
);

Then('I assert the login response code is {string}', (responseCode: string) => {
  const expectedStatusCode = Number(responseCode);

  return login.assertions.assertLoginResponseCode(expectedStatusCode);
});

Then(
  'I assert the remember me cookie {string} an expiration',
  (cookieState: 'has' | 'does not have') =>
    login.assertions.assertRemberMeCookie(cookieState === 'has')
);

Then('I assert the remember me cookie {string} been set', (cookieSetState: 'has' | 'has not') =>
  login.assertions.assertRememberMeCookieExists(cookieSetState === 'has')
);
