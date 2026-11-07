/** HOME DATE PICKER ELEMENTS */

export const getTransactionDateRangePicker = (): Cypress.Chainable<JQuery<HTMLDivElement>> =>
  cy.get('[data-test="transaction-list-filter-date-range"]');

export const getDatePicker = (): Cypress.Chainable<JQuery<HTMLDivElement>> =>
  getTransactionDateRangePicker().find('.react-calendar');

export const getDatePickerPreviousYearBtn = (): Cypress.Chainable<JQuery<HTMLButtonElement>> =>
  getDatePicker().find('.react-calendar__navigation__prev2-button');

export const getDatePickerPreviousMonthBtn = (): Cypress.Chainable<JQuery<HTMLButtonElement>> =>
  getDatePicker().find('.react-calendar__navigation__prev-button');

/** @description Navigation label shared by the day, month, year, and decade selection views */
export const getDatePickerNavigationLabelBtn = (): Cypress.Chainable<JQuery<HTMLButtonElement>> =>
  getDatePicker().find('.react-calendar__navigation__label');

/** @description Month options shown after clicking the month/year navigation button once */
export const getDatePickerMonthBtns = (): Cypress.Chainable<JQuery<HTMLButtonElement>> =>
  getDatePicker().find('.react-calendar__year-view__months__month');

/**
 * @description A month option in the month-selection view
 * @param accessibleMonthLabel i.e. "November 2026"
 */
export const getDatePickerMonthBtn = (
  accessibleMonthLabel: string
): Cypress.Chainable<JQuery<HTMLButtonElement>> =>
  getDatePickerMonthBtns().filter((_, button) => {
    return button.querySelector('abbr')?.getAttribute('aria-label') === accessibleMonthLabel;
  });

/** @description Year options shown after clicking the month/year navigation button twice */
export const getDatePickerYearBtns = (): Cypress.Chainable<JQuery<HTMLButtonElement>> =>
  getDatePicker().find('.react-calendar__decade-view__years__year');

/** @description A year option in the year-selection view */
export const getDatePickerYearBtn = (year: number): Cypress.Chainable<JQuery<HTMLButtonElement>> =>
  getDatePickerYearBtns().filter((_, button) => button.textContent?.trim() === String(year));

/** @description Decade options shown after clicking the navigation label three times */
export const getDatePickerDecadeBtns = (): Cypress.Chainable<JQuery<HTMLButtonElement>> =>
  getDatePicker().find('.react-calendar__century-view__decades__decade');

/** @description A decade option in the century-selection view, e.g. "2021 – 2030" */
export const getDatePickerDecadeBtn = (
  decadeLabel: string
): Cypress.Chainable<JQuery<HTMLButtonElement>> =>
  getDatePickerDecadeBtns().filter((_, button) => button.textContent?.trim() === decadeLabel);

export const getDatePickerNextMonthBtn = (): Cypress.Chainable<JQuery<HTMLButtonElement>> =>
  getDatePicker().find('.react-calendar__navigation__next-button');

export const getDatePickerNextYearBtn = (): Cypress.Chainable<JQuery<HTMLButtonElement>> =>
  getDatePicker().find('.react-calendar__navigation__next2-button');

export const getDatePickerWeekdayLabels = (): Cypress.Chainable<JQuery<HTMLElement>> =>
  getDatePicker().find('.react-calendar__month-view__weekdays abbr');

export const getDatePickerDayBtns = (): Cypress.Chainable<JQuery<HTMLButtonElement>> =>
  getDatePicker().find('button.react-calendar__tile');

export const getTodayBtn = (): Cypress.Chainable<JQuery<HTMLButtonElement>> =>
  getDatePicker().find('button.react-calendar__tile--now');

export const getDatePickerDayBtn = (
  accessibleDateLabel: string
): Cypress.Chainable<JQuery<HTMLButtonElement>> =>
  getDatePickerDayBtns().filter((_, button) => {
    return button.querySelector('abbr')?.getAttribute('aria-label') === accessibleDateLabel;
  });

/** @description Only visible when a date range is selected */
export const getDatePickerRangeStartDay = (): Cypress.Chainable<JQuery<HTMLButtonElement>> =>
  getDatePicker().find('.react-calendar__tile--rangeStart');

/** @description Only visible when a date range is selected */
export const getDatePickerRangeEndDay = (): Cypress.Chainable<JQuery<HTMLButtonElement>> =>
  getDatePicker().find('.react-calendar__tile--rangeEnd');
