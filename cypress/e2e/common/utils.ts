const typeIntoInput = (
  input: Cypress.Chainable<JQuery<HTMLElement>>,
  value: string,
  options?: Partial<Cypress.TypeOptions>
): Cypress.Chainable<JQuery<HTMLElement>> => input.clear().type(value, options);

const assertEleVisible = <T extends HTMLElement>(
  isVisible: boolean,
  element: Cypress.Chainable<JQuery<T>>
): Cypress.Chainable<JQuery<T>> =>
  isVisible ? element.should('be.visible') : element.should('not.be.visible');

const assertEleExists = <T extends HTMLElement>(
  shouldExist: boolean,
  element: Cypress.Chainable<JQuery<T>>
): Cypress.Chainable<JQuery<T>> =>
  shouldExist ? element.should('exist') : element.should('not.exist');

const assertEleTextContains = <T extends HTMLElement>(
  element: Cypress.Chainable<JQuery<T>>,
  expectedText: string
): Cypress.Chainable<JQuery<T>> => element.should('contain.text', expectedText);

const assertInputValueContains = (
  element: Cypress.Chainable<JQuery<HTMLElement>>,
  expectedValue: string
): Cypress.Chainable<JQuery<HTMLElement>> =>
  element.should(($input) => {
    expect($input.val()).to.contain(expectedValue);
  });

const assertEleDisabled = (
  isDisabled: boolean,
  element: Cypress.Chainable<JQuery<HTMLElement>>
): Cypress.Chainable<JQuery<HTMLElement>> =>
  isDisabled ? element.should('be.disabled') : element.should('be.enabled');

const assertCheckboxChecked = (
  isChecked: boolean,
  checkbox: Cypress.Chainable<JQuery<HTMLElement>>
): Cypress.Chainable<JQuery<HTMLElement>> =>
  isChecked ? checkbox.should('be.checked') : checkbox.should('not.be.checked');

const assertLinkHrefContains = (
  element: Cypress.Chainable<JQuery<HTMLAnchorElement>>,
  expectedHref: string
): Cypress.Chainable<JQuery<HTMLAnchorElement>> =>
  element.should('have.attr', 'href').and('include', expectedHref);

const assertCurrentUrl = (expectedUrl: string) => cy.url().should('contain', expectedUrl);

const assertCookieExpires = (
  cookieName: string,
  expirationType: 'session' | 'persistent'
): Cypress.Chainable<Cypress.Cookie | null> =>
  cy.getCookie(cookieName).should((cookie) => {
    if (!cookie) {
      throw new Error(`Expected ${cookieName} cookie to exist`);
    }

    if (expirationType === 'persistent') {
      if (
        typeof cookie.expiry !== 'number' ||
        !Number.isFinite(cookie.expiry) ||
        cookie.expiry <= Date.now() / 1000
      ) {
        throw new Error(`Expected ${cookieName} cookie to have a future expiration`);
      }
    }

    if (expirationType === 'session' && cookie.expiry !== undefined) {
      throw new Error(`Expected ${cookieName} cookie to be a session cookie`);
    }
  });

const assertCookieExists = (
  cookieName: string,
  shouldExist: boolean
): Cypress.Chainable<Cypress.Cookie | null> =>
  cy.getCookie(cookieName).should((cookie) => {
    if (shouldExist && !cookie) {
      throw new Error(`Expected ${cookieName} cookie to exist`);
    }

    if (!shouldExist && cookie) {
      throw new Error(`Expected ${cookieName} cookie not to exist`);
    }
  });

export {
  typeIntoInput,
  assertEleVisible,
  assertEleExists,
  assertEleTextContains,
  assertInputValueContains,
  assertEleDisabled,
  assertCheckboxChecked,
  assertLinkHrefContains,
  assertCurrentUrl,
  assertCookieExpires,
  assertCookieExists,
};
