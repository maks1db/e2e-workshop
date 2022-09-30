/* eslint-disable @typescript-eslint/ban-ts-comment */
export const proxyLocators = <K extends string>(locators: Record<K, string>) =>
  // @ts-ignore
  new Proxy(locators, {
    get: (target, name: K) => {
      const baseSelector = target[name];
      const selector = baseSelector.includes('[')
        ? baseSelector
        : `[data-test="${baseSelector}"]`;
      return cy.get(selector);
    },
  }) as Record<K, Cypress.Chainable<JQuery<HTMLElement>>>;
