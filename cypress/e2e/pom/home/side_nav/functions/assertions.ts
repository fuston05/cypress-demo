/** HOME / SIDE NAVIGATION ASSERTIONS */

import * as ele from '../elements/main.ts';
import * as headerEle from '../../header/elements/main.ts';
import * as utils from '../../../../common/utils.ts';

const assertSideNavVisible = (isVisible: boolean): Cypress.Chainable<JQuery<HTMLElement>> =>
  headerEle
    .getHamburgerMenuBtn()
    .should(() => {
      const sideNav = Cypress.$('[data-test="sidenav"]');
      expect(sideNav).to.have.length(isVisible ? 1 : 0);

      if (isVisible) {
        expect(sideNav.is(':visible')).to.equal(true);
      }
    })
    .as('Assert - Side nav visibility');

const assertUserImgVisible = (isVisible: boolean): Cypress.Chainable<JQuery<HTMLImageElement>> =>
  utils.assertEleVisible(isVisible, ele.getUserImg()).as('Assert - Side nav user image visibility');

const assertUserFullNameText = (expectedText: string): Cypress.Chainable<JQuery<HTMLElement>> =>
  utils
    .assertEleTextContains(ele.getUserFullName(), expectedText)
    .as('Assert - Side nav user full name');

const assertUsernameText = (expectedText: string): Cypress.Chainable<JQuery<HTMLElement>> =>
  utils.assertEleTextContains(ele.getUsername(), expectedText).as('Assert - Side nav username');

const assertUserBalanceText = (expectedText: string): Cypress.Chainable<JQuery<HTMLElement>> =>
  utils
    .assertEleTextContains(ele.getUserBalance(), expectedText)
    .as('Assert - Side nav user balance');

const assertHomeBtnVisible = (isVisible: boolean): Cypress.Chainable<JQuery<HTMLAnchorElement>> =>
  utils
    .assertEleVisible(isVisible, ele.getHomeBtn())
    .as('Assert - Side nav Home button visibility');

const assertHomeBtnText = (expectedText: string): Cypress.Chainable<JQuery<HTMLAnchorElement>> =>
  utils
    .assertEleTextContains(ele.getHomeBtn(), expectedText)
    .as('Assert - Side nav Home button text');

const assertHomeBtnHref = (expectedHref: string): Cypress.Chainable<JQuery<HTMLAnchorElement>> =>
  utils
    .assertLinkHrefContains(ele.getHomeBtn(), expectedHref)
    .as('Assert - Side nav Home button href');

const assertMyAccountBtnVisible = (
  isVisible: boolean
): Cypress.Chainable<JQuery<HTMLAnchorElement>> =>
  utils
    .assertEleVisible(isVisible, ele.getMyAccountBtn())
    .as('Assert - Side nav My Account button visibility');

const assertMyAccountBtnText = (
  expectedText: string
): Cypress.Chainable<JQuery<HTMLAnchorElement>> =>
  utils
    .assertEleTextContains(ele.getMyAccountBtn(), expectedText)
    .as('Assert - Side nav My Account button text');

const assertMyAccountBtnHref = (
  expectedHref: string
): Cypress.Chainable<JQuery<HTMLAnchorElement>> =>
  utils
    .assertLinkHrefContains(ele.getMyAccountBtn(), expectedHref)
    .as('Assert - Side nav My Account button href');

const assertBankAccountsBtnVisible = (
  isVisible: boolean
): Cypress.Chainable<JQuery<HTMLAnchorElement>> =>
  utils
    .assertEleVisible(isVisible, ele.getBankAccountsBtn())
    .as('Assert - Side nav Bank Accounts button visibility');

const assertBankAccountsBtnText = (
  expectedText: string
): Cypress.Chainable<JQuery<HTMLAnchorElement>> =>
  utils
    .assertEleTextContains(ele.getBankAccountsBtn(), expectedText)
    .as('Assert - Side nav Bank Accounts button text');

const assertBankAccountsBtnHref = (
  expectedHref: string
): Cypress.Chainable<JQuery<HTMLAnchorElement>> =>
  utils
    .assertLinkHrefContains(ele.getBankAccountsBtn(), expectedHref)
    .as('Assert - Side nav Bank Accounts button href');

const assertNotificationsBtnVisible = (
  isVisible: boolean
): Cypress.Chainable<JQuery<HTMLAnchorElement>> =>
  utils
    .assertEleVisible(isVisible, ele.getNotificationsBtn())
    .as('Assert - Side nav Notifications button visibility');

const assertNotificationsBtnText = (
  expectedText: string
): Cypress.Chainable<JQuery<HTMLAnchorElement>> =>
  utils
    .assertEleTextContains(ele.getNotificationsBtn(), expectedText)
    .as('Assert - Side nav Notifications button text');

const assertNotificationsBtnHref = (
  expectedHref: string
): Cypress.Chainable<JQuery<HTMLAnchorElement>> =>
  utils
    .assertLinkHrefContains(ele.getNotificationsBtn(), expectedHref)
    .as('Assert - Side nav Notifications button href');

const assertLogoutBtnVisible = (isVisible: boolean): Cypress.Chainable<JQuery<HTMLElement>> =>
  utils
    .assertEleVisible(isVisible, ele.getLogoutBtn())
    .as('Assert - Side nav Logout button visibility');

const assertLogoutBtnText = (expectedText: string): Cypress.Chainable<JQuery<HTMLElement>> =>
  utils
    .assertEleTextContains(ele.getLogoutBtn(), expectedText)
    .as('Assert - Side nav Logout button text');

export {
  assertSideNavVisible,
  assertUserImgVisible,
  assertUserFullNameText,
  assertUsernameText,
  assertUserBalanceText,
  assertHomeBtnVisible,
  assertHomeBtnText,
  assertHomeBtnHref,
  assertMyAccountBtnVisible,
  assertMyAccountBtnText,
  assertMyAccountBtnHref,
  assertBankAccountsBtnVisible,
  assertBankAccountsBtnText,
  assertBankAccountsBtnHref,
  assertNotificationsBtnVisible,
  assertNotificationsBtnText,
  assertNotificationsBtnHref,
  assertLogoutBtnVisible,
  assertLogoutBtnText,
};
