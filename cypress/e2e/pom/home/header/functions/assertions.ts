/** HOME / HEADER ASSERTIONS */

import * as ele from '../elements/main.ts';
import * as utils from '../../../../common/utils.ts';

const assertHamburgerMenuBtnVisible = (
  isVisible: boolean
): Cypress.Chainable<JQuery<HTMLElement>> =>
  utils
    .assertEleVisible(isVisible, ele.getHamburgerMenuBtn())
    .as('Assert - Header hamburger menu button visibility');

const assertEveryoneNavBtnVisible = (
  isVisible: boolean
): Cypress.Chainable<JQuery<HTMLAnchorElement>> =>
  utils
    .assertEleVisible(isVisible, ele.getEveryoneNavBtn())
    .as('Assert - Header Everyone navigation button visibility');

const assertEveryoneNavBtnText = (
  expectedText: string
): Cypress.Chainable<JQuery<HTMLAnchorElement>> =>
  utils
    .assertEleTextContains(ele.getEveryoneNavBtn(), expectedText)
    .as('Assert - Header Everyone navigation button text');

const assertEveryoneNavBtnHref = (
  expectedHref: string
): Cypress.Chainable<JQuery<HTMLAnchorElement>> =>
  utils
    .assertLinkHrefContains(ele.getEveryoneNavBtn(), expectedHref)
    .as('Assert - Header Everyone navigation button href');

const assertFriendsNavBtnVisible = (
  isVisible: boolean
): Cypress.Chainable<JQuery<HTMLAnchorElement>> =>
  utils
    .assertEleVisible(isVisible, ele.getFriendsNavBtn())
    .as('Assert - Header Friends navigation button visibility');

const assertFriendsNavBtnText = (
  expectedText: string
): Cypress.Chainable<JQuery<HTMLAnchorElement>> =>
  utils
    .assertEleTextContains(ele.getFriendsNavBtn(), expectedText)
    .as('Assert - Header Friends navigation button text');

const assertFriendsNavBtnHref = (
  expectedHref: string
): Cypress.Chainable<JQuery<HTMLAnchorElement>> =>
  utils
    .assertLinkHrefContains(ele.getFriendsNavBtn(), expectedHref)
    .as('Assert - Header Friends navigation button href');

const assertMineNavBtnVisible = (
  isVisible: boolean
): Cypress.Chainable<JQuery<HTMLAnchorElement>> =>
  utils
    .assertEleVisible(isVisible, ele.getMineNavBtn())
    .as('Assert - Header Mine navigation button visibility');

const assertMineNavBtnText = (expectedText: string): Cypress.Chainable<JQuery<HTMLAnchorElement>> =>
  utils
    .assertEleTextContains(ele.getMineNavBtn(), expectedText)
    .as('Assert - Header Mine navigation button text');

const assertMineNavBtnHref = (expectedHref: string): Cypress.Chainable<JQuery<HTMLAnchorElement>> =>
  utils
    .assertLinkHrefContains(ele.getMineNavBtn(), expectedHref)
    .as('Assert - Header Mine navigation button href');

const assertNewBtnVisible = (isVisible: boolean): Cypress.Chainable<JQuery<HTMLAnchorElement>> =>
  utils.assertEleVisible(isVisible, ele.getNewBtn()).as('Assert - Header New button visibility');

const assertNewBtnText = (expectedText: string): Cypress.Chainable<JQuery<HTMLAnchorElement>> =>
  utils.assertEleTextContains(ele.getNewBtn(), expectedText).as('Assert - Header New button text');

const assertNewBtnHref = (expectedHref: string): Cypress.Chainable<JQuery<HTMLAnchorElement>> =>
  utils.assertLinkHrefContains(ele.getNewBtn(), expectedHref).as('Assert - Header New button href');

const assertHeaderNotificationsBtnVisible = (
  isVisible: boolean
): Cypress.Chainable<JQuery<HTMLAnchorElement>> =>
  utils
    .assertEleVisible(isVisible, ele.getNotificationsBtn())
    .as('Assert - Header Notifications button visibility');

const assertHeaderNotificationsBtnText = (
  expectedText: string
): Cypress.Chainable<JQuery<HTMLAnchorElement>> =>
  utils
    .assertEleTextContains(ele.getNotificationsBtn(), expectedText)
    .as('Assert - Header Notifications button text');

const assertHeaderNotificationsBtnHref = (
  expectedHref: string
): Cypress.Chainable<JQuery<HTMLAnchorElement>> =>
  utils
    .assertLinkHrefContains(ele.getNotificationsBtn(), expectedHref)
    .as('Assert - Header Notifications button href');

const assertHeaderNewNotificationsCountText = (
  expectedText: string
): Cypress.Chainable<JQuery<HTMLElement>> =>
  utils
    .assertEleTextContains(ele.getNewNotificationsCount(), expectedText)
    .as('Assert - Header new notifications count text');

export {
  assertHamburgerMenuBtnVisible,
  assertEveryoneNavBtnVisible,
  assertEveryoneNavBtnText,
  assertEveryoneNavBtnHref,
  assertFriendsNavBtnVisible,
  assertFriendsNavBtnText,
  assertFriendsNavBtnHref,
  assertMineNavBtnVisible,
  assertMineNavBtnText,
  assertMineNavBtnHref,
  assertNewBtnVisible,
  assertNewBtnText,
  assertNewBtnHref,
  assertHeaderNotificationsBtnVisible,
  assertHeaderNotificationsBtnText,
  assertHeaderNotificationsBtnHref,
  assertHeaderNewNotificationsCountText,
};
