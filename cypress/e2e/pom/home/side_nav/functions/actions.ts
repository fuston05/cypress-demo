/** HOME / SIDE NAVIGATION ACTIONS */

import * as ele from '../elements/main.ts';

const clickSideNavHomeBtn = (): Cypress.Chainable<JQuery<HTMLAnchorElement>> =>
  ele.getHomeBtn().click().as('Click - Side nav Home');

const clickSideNavMyAccountBtn = (): Cypress.Chainable<JQuery<HTMLAnchorElement>> =>
  ele.getMyAccountBtn().click().as('Click - Side nav My Account');

const clickSideNavBankAccountsBtn = (): Cypress.Chainable<JQuery<HTMLAnchorElement>> =>
  ele.getBankAccountsBtn().click().as('Click - Side nav Bank Accounts');

const clickSideNavNotificationsBtn = (): Cypress.Chainable<JQuery<HTMLAnchorElement>> =>
  ele.getNotificationsBtn().click().as('Click - Side nav Notifications');

const clickSideNavLogoutBtn = (): Cypress.Chainable<JQuery<HTMLElement>> =>
  ele.getLogoutBtn().click().as('Click - Side nav Logout');

export {
  clickSideNavHomeBtn,
  clickSideNavMyAccountBtn,
  clickSideNavBankAccountsBtn,
  clickSideNavNotificationsBtn,
  clickSideNavLogoutBtn,
};
