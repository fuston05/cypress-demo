/** HOME / HEADER ACTIONS */

import * as ele from '../elements/main.ts';

const clickHeaderHamburgerMenuBtn = (): Cypress.Chainable<JQuery<HTMLElement>> =>
  ele.getHamburgerMenuBtn().click().as('Click - Header hamburger menu button');

const clickHeaderEveryoneNavBtn = (): Cypress.Chainable<JQuery<HTMLAnchorElement>> =>
  ele.getEveryoneNavBtn().click().as('Click - Top nav Everyone button');

const clickHeaderFriendsNavBtn = (): Cypress.Chainable<JQuery<HTMLAnchorElement>> =>
  ele.getFriendsNavBtn().click().as('Click - Top nav Friends button');

const clickHeaderMineNavBtn = (): Cypress.Chainable<JQuery<HTMLAnchorElement>> =>
  ele.getMineNavBtn().click().as('Click - Top nav Mine button');

const clickHeaderNewBtn = (): Cypress.Chainable<JQuery<HTMLAnchorElement>> =>
  ele.getNewBtn().click().as('Click - Top nav New button');

const clickHeaderNotificationsBtn = (): Cypress.Chainable<JQuery<HTMLAnchorElement>> =>
  ele.getNotificationsBtn().click().as('Click - Top nav Notifications button');

export {
  clickHeaderHamburgerMenuBtn,
  clickHeaderEveryoneNavBtn,
  clickHeaderFriendsNavBtn,
  clickHeaderMineNavBtn,
  clickHeaderNewBtn,
  clickHeaderNotificationsBtn,
};
