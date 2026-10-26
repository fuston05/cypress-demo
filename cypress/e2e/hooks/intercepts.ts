import { Before } from '@badeball/cypress-cucumber-preprocessor';

Before({ tags: '@login' }, () => {
  cy.intercept('POST', '**/login').as('login');
});

Before({ tags: '@signup' }, () => {
  cy.intercept('POST', '**/users').as('signup');
});
