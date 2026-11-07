/** HOME DATE PICKER ACTIONS */

import * as ele from '../elements/elements.ts';

const clickDatePickerPreviousYearBtn = (): Cypress.Chainable<JQuery<HTMLButtonElement>> =>
  ele.getDatePickerPreviousYearBtn().click().as('Click - Date picker previous year');

const clickDatePickerPreviousMonthBtn = (): Cypress.Chainable<JQuery<HTMLButtonElement>> =>
  ele.getDatePickerPreviousMonthBtn().click().as('Click - Date picker previous month');

/** @description Advances the calendar view from days to months, years, then decades */
const clickDatePickerNavigationLabelBtn = (): Cypress.Chainable<JQuery<HTMLButtonElement>> =>
  ele.getDatePickerNavigationLabelBtn().click().as('Click - Date picker navigation label');

/**
 * @description Selects a month from the grid opened by clicking the navigation label once
 * @param accessibleMonthLabel i.e. "November 2026"
 */
const clickDatePickerMonthBtn = (
  accessibleMonthLabel: string
): Cypress.Chainable<JQuery<HTMLButtonElement>> =>
  ele
    .getDatePickerMonthBtn(accessibleMonthLabel)
    .click()
    .as(`Click - Date picker month ${accessibleMonthLabel}`);

/** @description Selects a year from the grid opened by clicking the navigation label twice */
const clickDatePickerYearBtn = (year: number): Cypress.Chainable<JQuery<HTMLButtonElement>> =>
  ele.getDatePickerYearBtn(year).click().as(`Click - Date picker year ${year}`);

/**
 * @description Selects a decade from the view opened by clicking the navigation label three times
 * @param decadeLabel i.e. "2021 – 2030"
 */
const clickDatePickerDecadeBtn = (
  decadeLabel: string
): Cypress.Chainable<JQuery<HTMLButtonElement>> =>
  ele.getDatePickerDecadeBtn(decadeLabel).click().as(`Click - Date picker decade ${decadeLabel}`);

const clickDatePickerNextMonthBtn = (): Cypress.Chainable<JQuery<HTMLButtonElement>> =>
  ele.getDatePickerNextMonthBtn().click().as('Click - Date picker next month');

const clickDatePickerNextYearBtn = (): Cypress.Chainable<JQuery<HTMLButtonElement>> =>
  ele.getDatePickerNextYearBtn().click().as('Click - Date picker next year');

/** @param accessibleDateLabel i.e. "November 7, 2026" */
const clickDatePickerDayBtn = (
  accessibleDateLabel: string
): Cypress.Chainable<JQuery<HTMLButtonElement>> =>
  ele
    .getDatePickerDayBtn(accessibleDateLabel)
    .click()
    .as(`Click - Date picker day ${accessibleDateLabel}`);

const clickTodayBtn = (): Cypress.Chainable<JQuery<HTMLButtonElement>> =>
  ele.getTodayBtn().click().as('Click - Date picker "today"');

export {
  clickDatePickerPreviousYearBtn,
  clickDatePickerPreviousMonthBtn,
  clickDatePickerNavigationLabelBtn,
  clickDatePickerMonthBtn,
  clickDatePickerYearBtn,
  clickDatePickerDecadeBtn,
  clickDatePickerNextMonthBtn,
  clickDatePickerNextYearBtn,
  clickDatePickerDayBtn,
  clickTodayBtn,
};
