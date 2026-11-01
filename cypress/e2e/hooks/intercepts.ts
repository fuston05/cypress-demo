import { Before } from '@badeball/cypress-cucumber-preprocessor';

Before({ tags: '@login' }, () => {
  cy.intercept('POST', '**/login').as('login');
});

Before({ tags: '@signup' }, () => {
  cy.intercept('POST', '**/users').as('signup');
});

Before({ tags: '@home' }, () => {
  cy.intercept('GET', '**/transactions/contacts').as('getContactsTransactions');
  cy.intercept('GET', '**/transactions').as('getTransactions');
  cy.intercept('POST', '**/transactions').as('createTransaction');
  cy.intercept('GET', '**/checkAuth').as('checkAuth');
  cy.intercept('GET', '**/transactions/public').as('getPublicTransactions');
  cy.intercept('GET', '**/users').as('getUsers');
  cy.intercept('GET', '**/notifications').as('getNotifications');
  cy.intercept('PATCH', '**/notifications').as('updateNotifications');
  cy.intercept('POST', '**/likes').as('createLike');
  cy.intercept('POST', '**/comments').as('createComment');
  cy.intercept('POST', '**/graphql').as('getBankAccounts');
  cy.intercept('POST', '**/logout').as('logout');
});
