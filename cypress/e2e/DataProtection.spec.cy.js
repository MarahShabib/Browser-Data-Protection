const { loginAndNavigateToBrowserDataProtection , verifyUI , verifyNewFormUI } = require('./DataProtection.driver.cy')



describe('Browser Data Protection Tests', () => {
  beforeEach(() => {
    loginAndNavigateToBrowserDataProtection()
  })

  it('Browser Data Protection UI is rendered correctly', () => {
    verifyUI();
  });

    it('New Rule Form UI is rendered correctly', () => {
    verifyNewFormUI();
  });
})