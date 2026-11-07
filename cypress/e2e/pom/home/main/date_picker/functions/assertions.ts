/** HOME DATE PICKER ASSERTIONS */

import * as ele from '../elements/elements.ts';
import * as utils from '../../../../../common/utils.ts';

const assertDatePickerVisible = (isVisible: boolean): Cypress.Chainable<JQuery<HTMLDivElement>> =>
  utils.assertEleVisible(isVisible, ele.getDatePicker()).as('Assert - Date picker visibility');

const assertDatePickerNavigationLabelText = (
  expectedText: string
): Cypress.Chainable<JQuery<HTMLButtonElement>> =>
  utils
    .assertEleTextContains(ele.getDatePickerNavigationLabelBtn(), expectedText)
    .as('Assert - Date picker navigation label');

/** @description Asserts the month grid opened by clicking the navigation label once */
const assertDatePickerMonthViewVisible = (
  isVisible: boolean
): Cypress.Chainable<JQuery<HTMLButtonElement>> =>
  utils
    .assertEleVisible(isVisible, ele.getDatePickerMonthBtns())
    .as('Assert - Date picker month selection view visibility');

/**
 * @description Asserts a month option in the grid opened by clicking the navigation label once
 * @param accessibleMonthLabel i.e. "November 2026"
 */
const assertDatePickerMonthBtnVisible = (
  accessibleMonthLabel: string,
  isVisible: boolean
): Cypress.Chainable<JQuery<HTMLButtonElement>> =>
  utils
    .assertEleVisible(isVisible, ele.getDatePickerMonthBtn(accessibleMonthLabel))
    .as(`Assert - Date picker month ${accessibleMonthLabel} visibility`);

/**
 * @description Asserts the visible abbreviation for a month in the grid opened by clicking the navigation label once
 * @param accessibleMonthLabel i.e. "November 2026"
 * @param expectedText Visible month abbreviation, i.e. "Nov"
 */
const assertDatePickerMonthBtnText = (
  accessibleMonthLabel: string,
  expectedText: string
): Cypress.Chainable<JQuery<HTMLButtonElement>> =>
  utils
    .assertEleTextContains(ele.getDatePickerMonthBtn(accessibleMonthLabel), expectedText)
    .as(`Assert - Date picker month ${accessibleMonthLabel} text`);

/** @description Asserts the year grid opened by clicking the navigation label twice */
const assertDatePickerYearViewVisible = (
  isVisible: boolean
): Cypress.Chainable<JQuery<HTMLButtonElement>> =>
  utils
    .assertEleVisible(isVisible, ele.getDatePickerYearBtns())
    .as('Assert - Date picker year selection view visibility');

/** @description Asserts the decade grid opened by clicking the navigation label three times */
const assertDatePickerDecadeViewVisible = (
  isVisible: boolean
): Cypress.Chainable<JQuery<HTMLButtonElement>> =>
  utils
    .assertEleVisible(isVisible, ele.getDatePickerDecadeBtns())
    .as('Assert - Date picker decade selection view visibility');

/**
 * @description Asserts a decade option in the grid opened by clicking the navigation label three times
 * @param decadeLabel i.e. "2021 – 2030"
 */
const assertDatePickerDecadeBtnVisible = (
  decadeLabel: string,
  isVisible: boolean
): Cypress.Chainable<JQuery<HTMLButtonElement>> =>
  utils
    .assertEleVisible(isVisible, ele.getDatePickerDecadeBtn(decadeLabel))
    .as(`Assert - Date picker decade ${decadeLabel} visibility`);

/**
 * @description Asserts the displayed year range on an option in the decade-selection view
 * @param decadeLabel i.e. "2021 – 2030"
 */
const assertDatePickerDecadeBtnText = (
  decadeLabel: string
): Cypress.Chainable<JQuery<HTMLButtonElement>> =>
  utils
    .assertEleTextContains(ele.getDatePickerDecadeBtn(decadeLabel), decadeLabel)
    .as(`Assert - Date picker decade ${decadeLabel} text`);

/** @description Asserts the displayed year on an option in the grid opened by clicking the navigation label twice */
const assertDatePickerYearBtnText = (year: number): Cypress.Chainable<JQuery<HTMLButtonElement>> =>
  utils
    .assertEleTextContains(ele.getDatePickerYearBtn(year), String(year))
    .as(`Assert - Date picker year ${year} text`);

/** @description Asserts a year option in the grid opened by clicking the navigation label twice */
const assertDatePickerYearBtnVisible = (
  year: number,
  isVisible: boolean
): Cypress.Chainable<JQuery<HTMLButtonElement>> =>
  utils
    .assertEleVisible(isVisible, ele.getDatePickerYearBtn(year))
    .as(`Assert - Date picker year ${year} visibility`);

const assertDatePickerWeekdayCount = (
  expectedCount: number
): Cypress.Chainable<JQuery<HTMLElement>> =>
  ele
    .getDatePickerWeekdayLabels()
    .should('have.length', expectedCount)
    .as('Assert - Date picker weekday count');

/** @param accessibleDateLabel i.e. "November 7, 2026". From the initial "day" selection view*/
const assertDatePickerDayBtnVisible = (
  accessibleDateLabel: string,
  isVisible: boolean
): Cypress.Chainable<JQuery<HTMLButtonElement>> =>
  utils
    .assertEleVisible(isVisible, ele.getDatePickerDayBtn(accessibleDateLabel))
    .as(`Assert - Date picker day ${accessibleDateLabel} visibility`);

const assertTodayBtnVisible = (isVisible: boolean): Cypress.Chainable<JQuery<HTMLButtonElement>> =>
  utils.assertEleVisible(isVisible, ele.getTodayBtn()).as('Assert - Date picker today visibility');

/** @description Asserts today's tile text in the active day, month, or year selection view */
const assertTodayBtnText = (expectedText: string): Cypress.Chainable<JQuery<HTMLButtonElement>> =>
  utils
    .assertEleTextContains(ele.getTodayBtn(), expectedText)
    .as('Assert - Date picker today text');

const assertDatePickerRangeStartDayVisible = (
  isVisible: boolean
): Cypress.Chainable<JQuery<HTMLButtonElement>> =>
  utils
    .assertEleVisible(isVisible, ele.getDatePickerRangeStartDay())
    .as('Assert - Date picker range start day visibility');

/** @description Asserts the displayed day text on the selected range's start tile */
const assertDatePickerRangeStartDayText = (
  expectedText: string
): Cypress.Chainable<JQuery<HTMLButtonElement>> =>
  utils
    .assertEleTextContains(ele.getDatePickerRangeStartDay(), expectedText)
    .as('Assert - Date picker range start day text');

const assertDatePickerRangeEndDayVisible = (
  isVisible: boolean
): Cypress.Chainable<JQuery<HTMLButtonElement>> =>
  utils
    .assertEleVisible(isVisible, ele.getDatePickerRangeEndDay())
    .as('Assert - Date picker range end day visibility');

/** @description Asserts the displayed day text on the selected range's end tile */
const assertDatePickerRangeEndDayText = (
  expectedText: string
): Cypress.Chainable<JQuery<HTMLButtonElement>> =>
  utils
    .assertEleTextContains(ele.getDatePickerRangeEndDay(), expectedText)
    .as('Assert - Date picker range end day text');

export {
  assertDatePickerVisible,
  assertDatePickerNavigationLabelText,
  assertDatePickerMonthViewVisible,
  assertDatePickerMonthBtnVisible,
  assertDatePickerMonthBtnText,
  assertDatePickerYearViewVisible,
  assertDatePickerYearBtnVisible,
  assertDatePickerYearBtnText,
  assertDatePickerDecadeViewVisible,
  assertDatePickerDecadeBtnVisible,
  assertDatePickerDecadeBtnText,
  assertDatePickerWeekdayCount,
  assertDatePickerDayBtnVisible,
  assertTodayBtnVisible,
  assertTodayBtnText,
  assertDatePickerRangeStartDayVisible,
  assertDatePickerRangeStartDayText,
  assertDatePickerRangeEndDayVisible,
  assertDatePickerRangeEndDayText,
};
