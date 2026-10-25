export const typeIntoInput = (
  input: Cypress.Chainable<JQuery<HTMLElement>>,
  value: string,
  options?: Partial<Cypress.TypeOptions>,
): Cypress.Chainable<JQuery<HTMLElement>> => input.clear().type(value, options);
