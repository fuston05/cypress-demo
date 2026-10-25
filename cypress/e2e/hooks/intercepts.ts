import { Before } from '@badeball/cypress-cucumber-preprocessor';

Before({ tags: '@login' }, () => {
  cy.intercept('POST', '**/login').as('login');
});
