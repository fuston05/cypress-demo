import { Then, When } from '@badeball/cypress-cucumber-preprocessor';
import * as login from '../../e2e/pom/login/all.ts';
import * as signup from '../../e2e/pom/signup/all.ts';
import * as utils from '../../e2e/common/utils.ts';

When('I go back', () => cy.go('back'));

Then('I assert the current url contains {string}', (url: 'signin' | 'signup') =>
  utils.assertCurrentUrl(url)
);

When('I click the {string} link', (link: 'signin' | 'signup') => {
  if (link.toLowerCase() === 'signin') {
    signup.actions.clickSignInLink();
  } else if (link.toLowerCase() === 'signup') {
    login.actions.clickSignUpLink();
  } else {
    throw new Error(`Invalid link: ${link}`);
  }
});
