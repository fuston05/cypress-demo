/** HOME / MAIN ELEMENTS */

export const getTransactionDateRangeFilter = (): Cypress.Chainable<JQuery<HTMLElement>> =>
  cy.get('[data-test="transaction-list-filter-date-range-button"]');

export const getTransactionAmountRangeFilter = (): Cypress.Chainable<JQuery<HTMLElement>> =>
  cy.get('[data-test="transaction-list-filter-amount-range-button"]');

export const getTransactionList = (): Cypress.Chainable<JQuery<HTMLElement>> =>
  cy.get('[data-test="transaction-list"]');

export const getTransactionItem = (
  transactionIndex: number
): Cypress.Chainable<JQuery<HTMLLIElement>> =>
  getTransactionList().find('[data-test^="transaction-item-"]').eq(transactionIndex);

/** @description Gets the name of the sender for a transaction item at the specified index */
export const getTransactionSenderName = (
  transactionIndex: number
): Cypress.Chainable<JQuery<HTMLElement>> =>
  getTransactionItem(transactionIndex).find('[data-test^="transaction-sender-"]');

/** @description Gets the action verb of a transaction item at the specified index. e.g., "paid", "requested", etc. */
export const getTransactionActionVerb = (
  transactionIndex: number
): Cypress.Chainable<JQuery<HTMLElement>> =>
  getTransactionItem(transactionIndex).find('[data-test^="transaction-action-"]');

  /** @description Gets the name of the receiver for a transaction item at the specified index */
export const getTransactionReceiverName = (
  transactionIndex: number
): Cypress.Chainable<JQuery<HTMLElement>> =>
  getTransactionItem(transactionIndex).find('[data-test^="transaction-receiver-"]');

export const getTransactionLikeCount = (
  transactionIndex: number
): Cypress.Chainable<JQuery<HTMLParagraphElement>> =>
  getTransactionItem(transactionIndex).find('[data-test="transaction-like-count"]');

export const getTransactionCommentCount = (
  transactionIndex: number
): Cypress.Chainable<JQuery<HTMLParagraphElement>> =>
  getTransactionItem(transactionIndex).find('[data-test="transaction-comment-count"]');

export const getTransactionAmount = (
  transactionIndex: number
): Cypress.Chainable<JQuery<HTMLElement>> =>
  getTransactionItem(transactionIndex).find('[data-test^="transaction-amount-"]');
