/** HOME / MAIN ASSERTIONS */

import * as ele from '../elements/main.ts';
import * as utils from '../../../../common/utils.ts';

const assertTransactionDateRangeFilterVisible = (
  isVisible: boolean
): Cypress.Chainable<JQuery<HTMLElement>> =>
  utils
    .assertEleVisible(isVisible, ele.getTransactionDateRangeFilter())
    .as('Assert - Home transaction date range filter visibility');

const assertTransactionDateRangeFilterText = (
  expectedText: string
): Cypress.Chainable<JQuery<HTMLElement>> =>
  utils
    .assertEleTextContains(ele.getTransactionDateRangeFilter(), expectedText)
    .as('Assert - Home transaction date range filter text');

const assertTransactionAmountRangeFilterVisible = (
  isVisible: boolean
): Cypress.Chainable<JQuery<HTMLElement>> =>
  utils
    .assertEleVisible(isVisible, ele.getTransactionAmountRangeFilter())
    .as('Assert - Home transaction amount range filter visibility');

const assertTransactionAmountRangeFilterText = (
  expectedText: string
): Cypress.Chainable<JQuery<HTMLElement>> =>
  utils
    .assertEleTextContains(ele.getTransactionAmountRangeFilter(), expectedText)
    .as('Assert - Home transaction amount range filter text');

const assertTransactionListVisible = (isVisible: boolean): Cypress.Chainable<JQuery<HTMLElement>> =>
  utils
    .assertEleVisible(isVisible, ele.getTransactionList())
    .as('Assert - Home transaction list visibility');

const assertTransactionItemVisible = (
  transactionIndex: number,
  isVisible: boolean
): Cypress.Chainable<JQuery<HTMLLIElement>> =>
  utils
    .assertEleVisible(isVisible, ele.getTransactionItem(transactionIndex))
    .as(`Assert - Home transaction item ${transactionIndex} visibility`);

const assertTransactionSenderName = (
  transactionIndex: number,
  expectedText: string
): Cypress.Chainable<JQuery<HTMLElement>> =>
  utils
    .assertEleTextContains(ele.getTransactionSenderName(transactionIndex), expectedText)
    .as(`Assert - Home transaction ${transactionIndex} sender name`);

const assertTransactionActionVerb = (
  transactionIndex: number,
  expectedText: string
): Cypress.Chainable<JQuery<HTMLElement>> =>
  utils
    .assertEleTextContains(ele.getTransactionActionVerb(transactionIndex), expectedText)
    .as(`Assert - Home transaction ${transactionIndex} action verb`);

const assertTransactionReceiverName = (
  transactionIndex: number,
  expectedText: string
): Cypress.Chainable<JQuery<HTMLElement>> =>
  utils
    .assertEleTextContains(ele.getTransactionReceiverName(transactionIndex), expectedText)
    .as(`Assert - Home transaction ${transactionIndex} receiver name`);

const assertTransactionLikeCount = (
  transactionIndex: number,
  expectedText: string
): Cypress.Chainable<JQuery<HTMLParagraphElement>> =>
  utils
    .assertEleTextContains(ele.getTransactionLikeCount(transactionIndex), expectedText)
    .as(`Assert - Home transaction ${transactionIndex} like count`);

const assertTransactionCommentCount = (
  transactionIndex: number,
  expectedText: string
): Cypress.Chainable<JQuery<HTMLParagraphElement>> =>
  utils
    .assertEleTextContains(ele.getTransactionCommentCount(transactionIndex), expectedText)
    .as(`Assert - Home transaction ${transactionIndex} comment count`);

const assertTransactionAmount = (
  transactionIndex: number,
  expectedText: string
): Cypress.Chainable<JQuery<HTMLElement>> =>
  utils
    .assertEleTextContains(ele.getTransactionAmount(transactionIndex), expectedText)
    .as(`Assert - Home transaction ${transactionIndex} amount`);

export {
  assertTransactionDateRangeFilterVisible,
  assertTransactionDateRangeFilterText,
  assertTransactionAmountRangeFilterVisible,
  assertTransactionAmountRangeFilterText,
  assertTransactionListVisible,
  assertTransactionItemVisible,
  assertTransactionSenderName,
  assertTransactionActionVerb,
  assertTransactionReceiverName,
  assertTransactionLikeCount,
  assertTransactionCommentCount,
  assertTransactionAmount,
};
