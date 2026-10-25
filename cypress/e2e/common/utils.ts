const typeIntoInput = (
  input: Cypress.Chainable<JQuery<HTMLElement>>,
  value: string,
  options?: Partial<Cypress.TypeOptions>,
): Cypress.Chainable<JQuery<HTMLElement>> => input.clear().type(value, options);

const assertEleVisible = <T extends HTMLElement>(
  isVisible: boolean,
  element: Cypress.Chainable<JQuery<T>>,
): Cypress.Chainable<JQuery<T>> =>
  isVisible ? element.should('be.visible') : element.should('not.be.visible');

const assertEleTextContains = <T extends HTMLElement>(
  element: Cypress.Chainable<JQuery<T>>,
  expectedText: string,
): Cypress.Chainable<JQuery<T>> => element.should('contain.text', expectedText);

const assertInputValueContains = (
  element: Cypress.Chainable<JQuery<HTMLElement>>,
  expectedValue: string,
): Cypress.Chainable<JQuery<HTMLElement>> =>
  element.should(($input) => {
    expect($input.val()).to.contain(expectedValue);
  });

const assertEleDisabled = (
  isDisabled: boolean,
  element: Cypress.Chainable<JQuery<HTMLElement>>,
): Cypress.Chainable<JQuery<HTMLElement>> =>
  isDisabled ? element.should('be.disabled') : element.should('be.enabled');

const assertCheckboxChecked = (
  isChecked: boolean,
  checkbox: Cypress.Chainable<JQuery<HTMLElement>>,
): Cypress.Chainable<JQuery<HTMLElement>> =>
  isChecked ? checkbox.should('be.checked') : checkbox.should('not.be.checked');

const assertLinkHrefContains = (
  element: Cypress.Chainable<JQuery<HTMLAnchorElement>>,
  expectedHref: string,
): Cypress.Chainable<JQuery<HTMLAnchorElement>> =>
  element.should('have.attr', 'href').and('include', expectedHref);

export {
  typeIntoInput,
  assertEleVisible,
  assertEleTextContains,
  assertInputValueContains,
  assertEleDisabled,
  assertCheckboxChecked,
  assertLinkHrefContains,
};
