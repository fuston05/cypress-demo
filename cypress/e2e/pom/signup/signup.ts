import { Then, When } from '@badeball/cypress-cucumber-preprocessor';
import * as signup from '../signup/all.ts';
import { SignupFields } from '../types.js';

When('I blur the {string} field to trigger the error', (field: SignupFields['field']) => {
  signup.actions.blurField(field);
});

When('I type {string} into the {string} field', (text: string, field: SignupFields['field']) =>
  signup.actions.typeIntoField(text, field)
);

When('I click the Signup button', () => signup.actions.clickSignupBtn().wait('@signup'));

/** ********************* ASSERTIONS *********************** */
/** ******************************************************** */

Then('I assert the signup button is {string}', (state: 'enabled' | 'disabled') =>
  signup.assertions.assertSignupBtnDisabled(state === 'disabled')
);

Then(
  'I assert the {string} error {string} exist',
  (field: SignupFields['field'], assertion: 'should' | 'should not') =>
    signup.assertions.assertInputErrorExists(field, assertion === 'should')
);

Then(
  'I assert the {string} error contains {string}',
  (field: SignupFields['field'], error: string) =>
    signup.assertions.assertInputErrorText(field, error)
);

Then('I assert the signup response code is {string}', (responseCode: string) => {
  const expectedStatusCode = Number(responseCode);

  return signup.assertions.assertSignupResponseCode(expectedStatusCode);
});
