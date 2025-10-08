declare namespace Cypress {
  interface Chainable {
    waitForNetworkIdle(timeout?: number, idleTime?: number): Chainable<void>;
  }
}
