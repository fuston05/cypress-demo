/** HOME / MAIN ACTIONS */

import * as ele from '../elements/main.ts';

/**
 * @description Opens transaction detail view
 * @associatedEndpoints "/transactions/<id>"
 */
const clickTransactionItem = (transactionIndex: number): Cypress.Chainable<JQuery<HTMLLIElement>> =>
  ele
    .getTransactionItem(transactionIndex)
    .click()
    .as(`Click - Home transaction item ${transactionIndex}`);

const clickTransactionDateRangeFilter = (): Cypress.Chainable<JQuery<HTMLElement>> =>
  ele.getTransactionDateRangeFilter().click().as('Click - Home transaction date range filter');

const clickTransactionAmountFilter = (): Cypress.Chainable<JQuery<HTMLElement>> =>
  ele.getTransactionAmountRangeFilter().click().as('Click - Home transaction amount range filter');

export { clickTransactionItem, clickTransactionDateRangeFilter, clickTransactionAmountFilter };
