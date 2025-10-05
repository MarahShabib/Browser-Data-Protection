export class actions {

    static getElement(selectorOrText, options = {}) {
    if (options.containsText) {
      if (options.tag) {
        return cy.contains(options.tag, selectorOrText, { timeout: options.timeout || 4000 });
      } else {
        return cy.contains(selectorOrText, { timeout: options.timeout || 4000 });
      }
    }
    return cy.get(selectorOrText, { timeout: options.timeout || 4000 });
  }


  static login(authUrl, credentials, selectors) {
      cy.origin(authUrl, { args: { credentials, selectors } }, ({ credentials, selectors }) => {
      const getElement = (selector) => cy.get(selector, { timeout: 10000 }).should('be.visible') 
      getElement(selectors.login.username).clear({ force: true }).type(credentials.username)
      getElement(selectors.login.password).type(credentials.password)
      getElement(selectors.login.submit).click()
      getElement(selectors.login.mfa).type(credentials.mfa)
      getElement(selectors.login.submit).click()
      cy.wait(30000)
    })
  }

  static navigateToBrowserDataProtection(Url) {
    cy.visit(`${Url}`)
  }
}